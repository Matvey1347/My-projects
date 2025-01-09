from flask import Flask, request, jsonify
from dataclasses import dataclass
from typing import Optional
import asyncio
from PyCharacterAI import get_client
from PyCharacterAI.exceptions import SessionClosedError
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
token = "b755c6a5db3478c3d08f92034b0df5c588df39b0"
character_id = "vDJ1sQBOv-hE-SPZxbueB9-ySgtPP20ha-uvzL-4BOA"

@dataclass
class MessageResponse:
    message: str
    chat_id: str
    author_name: str

    def to_dict(self):
        return {
            "message": self.message,
            "chat_id": self.chat_id,
            "author_name": self.author_name
        }

@app.route("/chat", methods=["POST"])
def handle_message():
    request_data = request.get_json()
    message = request_data.get("message", "")
    chat_id = request_data.get("chat_id")

    # Создаем новый event loop для асинхронных операций
    loop = asyncio.new_event_loop()
    asyncio.set_event_loop(loop)
    
    try:
        # Запускаем асинхронную функцию в синхронном контексте
        response = loop.run_until_complete(process_message(message, chat_id))
        return jsonify(response.to_dict())
    except SessionClosedError:
        return jsonify({"error": "Session closed"}), 400
    finally:
        loop.close()

async def process_message(message: str, chat_id: Optional[str]):
    client = await get_client(token=token)
    
    try:
        if chat_id is None:
            # Создаем новый чат
            chat, greeting_message = await client.chat.create_chat(character_id)
            response_message = greeting_message
        else:
            # Отправляем сообщение в существующий чат
            response_message = await client.chat.send_message(
                character_id, 
                chat_id, 
                message
            )

        return MessageResponse(
            message=response_message.get_primary_candidate().text,
            chat_id=chat.chat_id if chat_id is None else chat_id,
            author_name=response_message.author_name
        )
    finally:
        await client.close_session()

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000, debug=True)