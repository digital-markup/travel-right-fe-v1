import Sidebar from "../components/sidebar";
import { Outlet } from "react-router";

function ChatLayout() {
  return (
    <div className="w-full min-h-screen">
      <div className="grid grid-cols-[280px_1fr] gap-x-6">
        <Sidebar.Chat />
        <div className="w-full">
          <div className="container mx-auto px-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatLayout;
