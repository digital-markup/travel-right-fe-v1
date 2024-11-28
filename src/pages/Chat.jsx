import React from "react";
import ChatBubbleAssistant from "../components/chat-assistant";
import ChatBubbleUser from "../components/chat-user";
import Button from "../components/ui/button";
import messageQueueProcess from "../actions/messageQueueProcess";
import useJsonStore from "../store/useJsonStore";

function Chat() {
  const [messages, setMessages] = React.useState([
    { role: "assistant", content: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = React.useState("");
  const { setLocations } = useJsonStore();

  const handleSend = (e) => {
    e.preventDefault();

    if (input.trim()) {
      setMessages([...messages, { role: "user", content: input }]);

      setTimeout(() => {
        const answers = messageQueueProcess(input);
        answers.then((data) => {
          setLocations(data.jsonData);

          setMessages((prev) => [
            ...prev,
            { role: "assistant", content: `${data.message}` },
          ]);
        });
      }, 1000);
      setInput("");
    }
  };

  return (
    <main className="w-full min-h-screen">
      <section className="flex flex-col gap-6 w-full h-screen">
        <header className="flex w-full justify-between items-center pt-4">
          <h2>Travel Right</h2>
        </header>
        <div className="w-full mt-5 flex flex-col flex-1 overflow-hidden overflow-y-scroll rounded">
          <div className="container mx-auto px-6">
            <div className="flex flex-col gap-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex w-full ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.role === "assistant" && (
                    <ChatBubbleAssistant message={message} />
                  )}
                  {message.role === "user" && (
                    <ChatBubbleUser message={message} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full">
          <div className="max-w-screen-md w-full bg-white">
            <div className="px-2 w-full">
              <form
                id="chat-form"
                className="my-4 flex items-center sticky w-full bottom-5"
                onSubmit={handleSend}
              >
                <input
                  id="chat-input"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-grow w-full h-14 p-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Type your message..."
                />
                <Button
                  type={"submit"}
                  title={"Send"}
                  className={"ml-4 h-14 rounded-full"}
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Chat;
