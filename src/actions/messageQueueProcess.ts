import getAnswersAsync from "../api/POST/getAnswersAsync"
import replaceJson from "../services/replaceJsonData";
import convertToMarkdown from "../services/toMarkdown";
import { v4 as uuidv4 } from "uuid";

const messageQueueProcess = async (input: string) => {
    try {
        // pass the message to server and get the result
        if (input) {
            const response = await getAnswersAsync(input);
            // remove json tag data
            const { message, jsonData, key } = replaceJson(response);
            // pass this to the markdown function
            const markdown = convertToMarkdown(message);

            return {
                key,
                message: markdown,
                jsonData: jsonData,
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error("Failed to get answers" + error);
    }
}

export default messageQueueProcess