/* eslint-disable react/prop-types */

import Markdown from "react-markdown";

function ChatBubbleAssistant({ message }) {
  return (
    <div className="flex items-start mb-4">
      <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xl">
        <Markdown>{message.content}</Markdown>
      </div>
    </div>
  );
}

export default ChatBubbleAssistant;
