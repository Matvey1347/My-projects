document.getElementById("submitButton").addEventListener("click", async (event) => {
    event.preventDefault();

    const prompt = document.getElementById("prompt").value.trim();
    const imageUpload = document.getElementById("imageUpload").files[0];
    const status = document.getElementById("status");
    const submitButton = document.getElementById("submitButton");

    if (!prompt || !imageUpload) {
        status.textContent = "Please enter a prompt and select an image.";
        return;
    }

    const reader = new FileReader();
    reader.onloadend = async () => {
        console.log("File loaded");
        const base64Image = reader.result.split(',')[1];

        const formData = new FormData();
        formData.append("prompt", prompt);
        formData.append("image", base64Image);

        status.textContent = "Generating video... Please wait...";
        submitButton.disabled = true;

        try {
            const videoResponse = await fetch("http://62.72.20.247:8050/generate-video", {
                method: "POST",
                body: JSON.stringify({ prompt, image_url: base64Image }),
                headers: {
                    "Content-Type": "application/json",
                }
            });

            if (!videoResponse.ok) {
                throw new Error("Failed to start video generation");
            }

            const { task_id } = await videoResponse.json();
            console.log("Task ID:", task_id);
            localStorage.setItem('task_id', task_id);

            let statusResponse;
            do {
                await new Promise(resolve => setTimeout(resolve, 2000));
                statusResponse = await fetch(`http://62.72.20.247:8050/status/${task_id}`);
                const { status: taskStatus } = await statusResponse.json();
                status.textContent = `Task status: ${taskStatus}`;
                if (taskStatus === 'completed') break;
            } while (statusResponse.status !== "completed");

            const videoUrl = `http://62.72.20.247:8050/get-video/${task_id}`;
            status.textContent = "Video successfully generated!";
            
            const videoPlayer = document.getElementById("videoPlayer");
            videoPlayer.src = videoUrl;
            videoPlayer.style.display = "block";
            videoPlayer.controls = true;

        } catch (error) {
            console.error("Error generating video:", error);
            status.textContent = "Error: " + error.message;
        } finally {
            submitButton.disabled = false;
        }
    };

    reader.readAsDataURL(imageUpload);
});
