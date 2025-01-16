import io
import logging
import time
import base64
from runwayml import RunwayML
from PIL import Image

logging.basicConfig(level=logging.DEBUG)

class VideoGen:
    def __init__(self, token):
        self.token = token
        self.media_path = "./VideoBox"
        self.client = RunwayML(api_key="key_afac42426a23afe8518456682af4dca87f75c8dbadb7832245ebf2f98d2b37aa1f1c70db267f2300d9ac588d94ba88d86aa5b745eede6f427013678d11ac42b8")

    def compress_image(self, image_path):
        img = Image.open(image_path)   

        img_byte_array = io.BytesIO()
        img.save(img_byte_array, format='JPEG', quality=50) 
        
        return img_byte_array.getvalue()

    def encode_image_to_base64(self, image_path):
        with open(image_path, "rb") as f:
            return base64.b64encode(f.read()).decode("utf-8")

    def generate(self, prompt, file_name, image_path):
        try:
            logging.info(f"Начало генерации видео с prompt: {prompt}")
        
            compressed_image = self.compress_image(image_path)
    
            image_data = base64.b64encode(compressed_image).decode('utf-8')
            
            logging.info(f"Размер Base64 строки изображения: {len(image_data)}")

            task = self.client.image_to_video.create(
                model='gen3a_turbo',  
                prompt_image=f"data:image/png;base64,{image_data}",  
                prompt_text=prompt, 
            )
        
            task_id = task.id
            logging.info(f"Задача с ID {task_id} была создана.")
            time.sleep(10)  
        
            task = self.client.tasks.retrieve(task_id)
        
            while task.status not in ['SUCCEEDED', 'FAILED']:
                logging.info(f"Задача в процессе, статус: {task.status}")
                time.sleep(10) 
                task = self.client.tasks.retrieve(task_id)
            logging.info(f"Статус задачи: {task.status}")
            logging.info(f"Данные о задаче: {task}")
            if task.status == 'SUCCEEDED':
                video_url = task.output[0]  
                logging.info(f"Видео сгенерировано успешно: {video_url}")
                return {"file_path": video_url, "video_url": video_url}

            else:
                logging.error(f"Задача не выполнена: {task.status}")
                if hasattr(task, 'error_message'):
                    logging.error(f"Сообщение об ошибке: {task.error_message}")
                if hasattr(task, 'error_details'):
                    logging.error(f"Дополнительные детали ошибки: {task.error_details}")
                raise Exception(f"Видео не удалось сгенерировать. Статус задачи: {task.status}")
        
        except Exception as e:
            logging.error(f"Ошибка генерации видео: {e}")
            raise

