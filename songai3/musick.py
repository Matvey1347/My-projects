import replicate
from config import media_path
import os

class MusickGen:
    def __init__(self, token):
        self.token_replicate = token

    def generate(self, promt, file_name):
        try:
            print(f"Starting generation for file: {file_name} with prompt: {promt}")
            client = replicate.Client(api_token=self.token_replicate)
            input = {
                "prompt": promt,
                "model_version": "stereo-large",
                "output_format": "mp3",
                "normalization_strategy": "peak"
            }

            output = client.run(
                "meta/musicgen:671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb",
                input=input
            )

            # Проверка существования директории
            if not os.path.exists(media_path):
                os.makedirs(media_path)
                print(f"Directory {media_path} created.")

            file_path = media_path + file_name
            with open(file_path, "wb") as file:
                file.write(output.read())

            print(f"File successfully written: {file_path}")
            return {'file_path': file_path, 'b_musick': output}
        except Exception as e:
            print(f"Error during generation: {e}")
            raise
