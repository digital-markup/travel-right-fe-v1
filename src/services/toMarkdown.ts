const convertToMarkdown = (text: string) => {
    // Replace newline escape characters with actual newlines
    return text.replace(/\\n/g, '\n');
};

export default convertToMarkdown;