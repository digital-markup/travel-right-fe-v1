import TurndownService from "turndown";

const convertToMarkdown = (text: string) => {
    // split the text to lines
    const lines = text.split('\n');
    // process each line
    const processedLines = lines.map((line) => {
        // convert numbered lines
        if (/^\d+\./.test(line)) {
            return line;
        }
        // convert bold text
        line = line.replace(/\*\*(.*?)\*\*/g, '**$1**');
        // Handle headings (if needed)
        if (line.trim().startsWith('#')) {
            return line;
        }

        return line;
    });
    return processedLines.join('\n');
    
};

export default convertToMarkdown;