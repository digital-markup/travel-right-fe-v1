import { v4 as uuidv4 } from "uuid";

const replaceJson = (text: string) => {
    // if no JSON block is found, return the original text
    if (!text.includes('```json')) {
        return {
            message: text,
            jsonData: {}
        };
    }
    // Find the start and end indexes of the JSON block
    const jsonStartIndex = text.indexOf('```json');
    const jsonEndIndex = text.indexOf('```', jsonStartIndex + 7);

    const jsonString = text.slice(jsonStartIndex + 7, jsonEndIndex).trim();
    const parsedJson = JSON.parse(jsonString);

    // Extract the message without the JSON block
    const message = text.slice(0, jsonStartIndex).trim() + text.slice(jsonEndIndex + 3).trim();

    // Return the message and the parsed JSON
    return {
        message,
        jsonData: parsedJson,
        key: uuidv4()
    };
};

export default replaceJson;