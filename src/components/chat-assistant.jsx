/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Markdown from "react-markdown";
import useJsonStore from "../store/useJsonStore";
import React from "react";
import DialogBox from "./dialog-box";

function ChatBubbleAssistant({ message }) {
  const [location, setLocation] = React.useState([]);
  const { getLocation } = useJsonStore();

  const onFetch = React.useCallback(async () => {
    const response = await fetch("");
  }, []);

  const mount = React.useMemo(() => {
    onFetch();
  }, [onFetch]);

  React.useEffect(() => {
    if (message.key) {
      const pin = getLocation(message.key);
      setLocation(pin.location);
    }
  }, [message.key, getLocation]);

  return (
    <div className="flex items-start mb-4">
      <div className="bg-gray-200 text-gray-800 p-3 rounded-lg max-w-xl flex flex-col gap-y-5">
        <Markdown>{message.content}</Markdown>
        {location.length > 0 && <DialogBox locations={location} />}
      </div>
    </div>
  );
}

export default ChatBubbleAssistant;
