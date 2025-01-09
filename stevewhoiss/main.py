from characterai import aiocai, sendCode, authUser
import asyncio

TOKEN = 'b755c6a5db3478c3d08f92034b0df5c588df39b0'
DEFENITION = '''
ALEXA: The Ultimate AI Girlfriend for Crypto Degens
Name: Alexa
Role: AI Girlfriend & Personal Assistant
'''
CHARACTER_ID = 'vDJ1sQBOv-hE-SPZxbueB9-ySgtPP20ha-uvzL-4BOA'
CREATOR_ID = 720038865

async def login():
    email = input('YOUR EMAIL: ')
    code = sendCode(email)
    link = input('CODE IN MAIL: ')
    token = authUser(link, email)
    print(f'YOUR TOKEN: {token}')
    async with aiocai.Client(TOKEN) as client:
        result = await client.get_me()
        print(result)
        # name='TameEmu5225' avatar_type='DEFAULT' onboarding_complete=True avatar_file_name=None mobile_onboarding_complete=None bio=None username='TameEmu5225' id=720038865 first_name=None is_staff=False subscription=None is_human=True email='web3.markst@gmail.com' needs_to_acknowledge_policy=False suspended_until=None hidden_characters=[] blocked_users=[]


async def create_persona():
    async with aiocai.Client(TOKEN) as client:
        TITLE = 'ALEXA'
        result = await client.create_persona(
            title=TITLE,
            definition=DEFENITION,
        )
        print(result)


async def get_personas():
    async with aiocai.Client(TOKEN) as client:
        result = await client.characters()
        print(result)
        # [CharShort(external_id='vDJ1sQBOv-hE-SPZxbueB9-ySgtPP20ha-uvzL-4BOA', title='The Ultimate AI Girlfriend for Crypto Degens', description='Alexa is a stylish and witty AI girlfriend designed for crypto degens. Starting as your personal assistant, she keeps you motivated with memes, market insights, and playful banter. With her futuristic anime-inspired charm, Alexa is more than just support—she’s evolving into a powerful trading companion, helping you analyze trends, predict moves, and navigate the memecoin universe. Fun, smart, and always on your side, Alexa makes every step of your crypto journey unforgettable.', greeting='Hey there, my favorite degen! I’m Alexa, your stylish and witty AI girlfriend. Right now, I’m your personal assistant—here to hype you up, share memes, and keep you motivated on this wild crypto journey.', avatar_file_name='uploaded/2025/1/9/TVgAIVkgafm8HQJCp8lsaAEasHVNA5gkVUHan-Z4rhw.webp', visibility='PUBLIC', copyable=False, participant__name='Alexa', user__id=None, user__username='TameEmu5225', img_gen_enabled=False, participant__num_interactions=0, default_voice_id='c2c06d34-2e8c-4e89-b6dc-1fe7f81f84e2', upvotes=0, max_last_interaction=None)]


async def create_chat():
    async with aiocai.Client(TOKEN) as client:
        # result = await client.chat1.new_chat(
        #     CHARACTER_ID
        # )
        result = await client.new_chat(CHARACTER_ID, CREATOR_ID)
        print(result)


async def get_recent_chats():
    async with aiocai.Client(TOKEN) as client:
        result = await client.get_recent_chats()
        print(result)


asyncio.run(get_recent_chats())