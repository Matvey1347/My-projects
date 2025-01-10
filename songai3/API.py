import traceback
from fastapi import FastAPI, HTTPException, Response
from fastapi.responses import FileResponse
from pydantic import BaseModel
import time
import hashlib
from threading import Thread
from musick import MusickGen
from config import token, media_path
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

class Bank:
    def __init__(self):
        self.obj = {}

    def set_status(self, task_id, status):
        self.obj[task_id] = {'status': status, 'thread': None}

    def get_status(self, task_id):
        return self.obj.get(task_id, {}).get('status', 'unknown')

bank = Bank()
generator = MusickGen(token)

class GenerateRequest(BaseModel):
    promt: str

class CommonMusickRequest(BaseModel):
    ident: str

def generate_unique_code():
    current_time = time.time()
    time_str = str(current_time)
    unique_code = hashlib.md5(time_str.encode()).hexdigest()
    return unique_code

@app.post("/generate")
def get_instances(request: GenerateRequest):
    id = generate_unique_code()
    bank.set_status(id, 'running')
    try:
        def generation_task():
            try:
                result = generator.generate(request.promt, f"{id}.mp3")
                if result['file_path']:
                    bank.set_status(id, 'completed')
                else:
                    bank.set_status(id, 'failed')
            except Exception as e:
                bank.set_status(id, 'failed')
                print(f"Ошибка: {e}")

        x = Thread(target=generation_task)
        bank.obj[id]['thread'] = x
        x.start()
        return {'gen_id': id}
    except Exception as e:
        return {'activate': False, 'error': str(traceback.format_exc())}


@app.get("/status/{gen_id}")
def check_status(gen_id: str):
    status = bank.get_status(gen_id)
    return {'status': status}

@app.post("/commonMusick")
def get_instances(request: CommonMusickRequest):
    try:
        file_path = os.path.join(media_path, f"{request.ident}.mp3")

        if not os.path.exists(file_path):
            return {'error': 'Файл не найден.'}
        
        with open(file_path, 'rb') as f:
            data = f.read()

        return Response(
            content=data,
            media_type="audio/mpeg",
            headers={
                "Content-Disposition": f'attachment; filename="{request.ident}.mp3"',
            },
        )
    except Exception as e:
        return {'error': str(e)}

@app.get("/getLastGeneratedFile")
def get_last_generated_file():
    folder_path = "TreckBox"
    
    try:
        files = [f for f in os.listdir(folder_path) if os.path.isfile(os.path.join(folder_path, f))]
        
        if not files:
            raise HTTPException(status_code=404, detail="Нет файлов в папке.")
        files_with_paths = [os.path.join(folder_path, f) for f in files]
        files_with_paths.sort(key=lambda x: os.path.getctime(x), reverse=True)
        latest_file = files_with_paths[0]
        
        if os.path.exists(latest_file):
            return FileResponse(latest_file)
        else:
            raise HTTPException(status_code=404, detail="Файл не найден.")

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Произошла ошибка: {str(e)}")



if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
