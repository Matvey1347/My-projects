
const CLAUDE_API_KEY = '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';

const profileData = {
    tweets: [
        "Example tweet 1",
        "Example tweet 2",
    ],
    profileInfo: "45th President of the United States of America🇺🇸",
};

async function analyzeProfile() {
    try {
        const response = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': CLAUDE_API_KEY,
                'anthropic-version': '2023-06-01'
            },
            body: JSON.stringify({
                model: "claude-3-5-sonnet-20241022",
                max_tokens: 2000,
                messages: [{
                    role: "user",
                    content: [
                        {
                            type: "text",
                            text: `You are an experienced Astrologer who specializes in writing Horoscopes. Act like a horoscope teller.
                            
Your job is to read the data provided below. This Twitter data is the only data you get to understand this person.

Profile Info: ${profileData.profileInfo}

Tweets:
${profileData.tweets.join("\n")}

Please analyze this person and return a JSON response with the following structure:
{
    "strengths": ["string", "string", "string", "string", "string"],
    "weaknesses": ["string", "string", "string", "string", "string"],
    "loveLife": "string",
    "moneyPrediction": {
        "description": "string",
        "millionaireChance": number
    },
    "health": "string",
    "biggestGoal": "string",
    "colleaguePerspective": "string",
    "pickupLines": ["string", "string", "string"],
    "famousPersonComparison": {
        "person": "string",
        "explanation": "string"
    },
    "previousLife": {
        "person": "string",
        "explanation": "string"
    },
    "animal": {
        "name": "string",
        "explanation": "string"
    },
    "fiftyDollarThing": {
        "item": "string",
        "price": number,
        "explanation": "string"
    },
    "career": {
        "path": "string",
        "explanation": "string"
    },
    "lifeSuggestion": "string"
}

Return ONLY the JSON, no additional text.`
                        }
                    ]
                }]
            })
        });

        const data = await response.json();
        
        // Извлекаем JSON из ответа Claude
        const responseText = data.content[0].text;
        const analysis = JSON.parse(responseText);
        
        // Красиво печатаем результат
        console.log(JSON.stringify(analysis, null, 2));
        
    } catch (error) {
        console.error('Error:', error);
    }
}

// Запускаем анализ
analyzeProfile();