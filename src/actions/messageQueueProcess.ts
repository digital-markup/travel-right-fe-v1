import getAnswersAsync from "../api/POST/getAnswersAsync"
import convertToMarkdown from "../services/toMarkdown";

const messageQueueProcess = async (message: string) => {
    try {
        // pass the message to server and get the result
        if (message) {
            const response = await getAnswersAsync(message);
            // pass this to the markdown function
            const markdown = convertToMarkdown(response);
            console.log(markdown);
            return markdown
        }
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get answers" + error);
    }
}

export default messageQueueProcess