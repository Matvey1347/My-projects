document.getElementById("submitButton").addEventListener("click", async () => {
    const prompt = document.getElementById("prompt").value.trim();
    const outputFormat = document.getElementById("outputFormat").value;
    const status = document.getElementById("status");
    const downloadSection = document.getElementById("downloadSection");
    const downloadLink = document.getElementById("downloadLink");
    const playButton = document.getElementById("playButton");
    const audioPlayer = document.getElementById("audioPlayer");
    const submitButton = document.getElementById("submitButton");

    if (!prompt) {
        status.textContent = "Пожалуйста, введите промт.";
        return;
    }

    status.textContent = "Генерация аудио...";
    submitButton.disabled = true;

    try {
        const generateResponse = await fetch("http://localhost:8000/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ promt: prompt })
        });

        if (!generateResponse.ok) {
            throw new Error("Не удалось начать генерацию аудио.");
        }

        const { gen_id } = await generateResponse.json();
        if (!gen_id) {
            throw new Error("Не получен идентификатор генерации.");
        }

        status.textContent = "Обработка... Пожалуйста, подождите.";

        const waitForCompletion = async () => {
            while (true) {
                try {
                    const statusResponse = await fetch(`http://localhost:8000/status/${gen_id}`);
                    if (!statusResponse.ok) {
                        throw new Error("Не удалось получить статус генерации.");
                    }

                    const { status: generationStatus } = await statusResponse.json();
                    console.log(`Текущий статус генерации: ${generationStatus}`);

                    if (generationStatus === "completed") {
                        return true;
                    } else if (generationStatus === "failed") {
                        throw new Error("Генерация аудио не удалась.");
                    }

                    await new Promise((resolve) => setTimeout(resolve, 4000)); 
                } catch (error) {
                    console.error("Ошибка при получении статуса:", error);
                    throw new Error("Ошибка при получении статуса генерации.");
                }
            }
        };

        try {
            await waitForCompletion();
            console.log("Генерация успешно завершена!");
        } catch (error) {
            console.error("Ошибка в процессе ожидания завершения:", error);
        }

        const audioResponse = await fetch(`http://localhost:8000/commonMusick`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ident: gen_id })
        });

        if (!audioResponse.ok) {
            const errorText = await audioResponse.text();
            console.error('Ошибка при получении аудио:', errorText);
            throw new Error("Не удалось скачать аудио.");
        }

        const audioBlob = await audioResponse.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        audioPlayer.src = audioUrl;
        audioPlayer.style.display = "block";
        status.textContent = ''; 
        downloadSection.style.display = "block";

        playButton.addEventListener("click", () => {
            audioPlayer.play();
        });

    } catch (error) {
        console.error('Произошла ошибка:', error);
        status.textContent = "Произошла ошибка: " + error.message;
        submitButton.disabled = false; 
    }
});

document.getElementById("showLastFileButton").addEventListener("click", async () => {
    const status = document.getElementById("status");
    const downloadSection = document.getElementById("downloadSection");
    const downloadLink = document.getElementById("downloadLink");
    const playButton = document.getElementById("playButton");
    const audioPlayer = document.getElementById("audioPlayer");

    status.textContent = "Загружаем последний сгенерированный файл...";

    try {
        const lastFileResponse = await fetch("http://localhost:8000/getLastGeneratedFile");
        if (!lastFileResponse.ok) {
            throw new Error("Не удалось получить последний файл.");
        }

        const audioBlob = await lastFileResponse.blob();
        const audioUrl = URL.createObjectURL(audioBlob);
        audioPlayer.src = audioUrl;
        audioPlayer.style.display = "block";
        status.textContent = ''; 
        downloadSection.style.display = "block"; 

        playButton.addEventListener("click", () => {
            audioPlayer.play();
        });

    } catch (error) {
        console.error('Ошибка при получении последнего файла:', error);
        status.textContent = "Произошла ошибка: " + error.message;
    }
});
