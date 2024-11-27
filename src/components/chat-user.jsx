/* eslint-disable react/prop-types */
function ChatBubbleUser({message}) {
  return (
    <div className="flex items-end justify-end mb-4">
      <div className="bg-blue-500 text-white p-3 rounded-lg max-w-xs">
        <p>{message.content}</p>
      </div>
    </div>
  );
}

export default ChatBubbleUser;
