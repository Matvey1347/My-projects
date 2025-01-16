import logging
import os
import time
import hashlib
from threading import Thread
from fastapi import FastAPI, File, UploadFile, HTTPException
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
import shutil
import base64
from musick import VideoGen
from config import token
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class VideoRequest(BaseModel):
    prompt: str
    image_url: str

generator = VideoGen(token)

class Bank:
    def __init__(self):
        self.obj = {}

    def set_status(self, task_id, status, video_file_path=None):
        self.obj[task_id] = {'status': status, 'video_file_path': video_file_path, 'thread': None}

    def get_status(self, task_id):
        return self.obj.get(task_id, {}).get('status', 'unknown')

    def get_video_file_path(self, task_id):
        return self.obj.get(task_id, {}).get('video_file_path', None)

bank = Bank()

def clear_directories():
    try:
        for folder in ["./images", "./VideoBox"]:
            if os.path.exists(folder):
                shutil.rmtree(folder)
            os.makedirs(folder)
    except Exception as e:
        logging.error(f"Error clearing directories: {e}")
def generate_unique_code():
    current_time = time.time()
    return hashlib.md5(str(current_time).encode()).hexdigest()

@app.post("/generate-video")
async def generate_video(request: VideoRequest):
    task_id = generate_unique_code()
    clear_directories()  

    try:
        image_data = base64.b64decode(request.image_url)
        image_path = f"./images/{task_id}_image.jpg"
        with open(image_path, "wb") as f:
            f.write(image_data)
        thread = Thread(target=generation_task, args=(request.prompt, task_id, image_path))
        thread.start()

        return {"task_id": task_id}

    except Exception as e:
        logging.error(f"Ошибка при обработке Base64 изображения: {e}")
        raise HTTPException(status_code=500, detail="Ошибка при обработке изображения")

def generation_task(prompt, task_id, image_path):
    try:
        result = generator.generate(prompt, f"{task_id}.mp4", image_path)
        if result['video_url']:
            video_url = result['video_url']
            bank.set_status(task_id, 'completed', video_url)
            logging.info(f"Видео сгенерировано: {video_url}")
        else:
            bank.set_status(task_id, 'failed')
    except Exception as e:
        bank.set_status(task_id, 'failed')
        logging.error(f"Ошибка: {e}")

@app.get("/status/{task_id}")
def get_status(task_id: str):
    status = bank.get_status(task_id)
    return {"status": status}

@app.get("/get-video/{task_id}")
def get_video(task_id: str):
    video_url = bank.get_video_file_path(task_id)
    if video_url:
        return {"video_url": video_url}
    else:
        raise HTTPException(status_code=404, detail="Видео не найдено")




