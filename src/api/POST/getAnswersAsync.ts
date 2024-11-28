const getAnswersAsync = async (input: string) => {
    try {
        const response = await fetch("https://candid-kitsune-2bf5f6.netlify.app/api/chat/chat-chain", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message: input
            }),
            cache: "default"
        });
        const data = await response.json();
        if (data.success) {
            return data.body;
        }

        throw new Error("Failed to get answers");

    } catch (error) {
        console.log(error);
        throw new Error("Failed to get answers" + error);
    }
};

export default getAnswersAsync;