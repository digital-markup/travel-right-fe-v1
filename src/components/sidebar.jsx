import { Link } from "react-router";

function Sidebar() {
  return (
    <div className="w-full h-screen bg-slate-100/50 border-r-slate-300 border-r overflow-hidden flex flex-col gap-y-8">
      <header className="flex flex-col items-start">
        <h2 className="text-lg">Travel Right</h2>
      </header>
      <div className="flex flex-1 flex-col gap-3">
        <Link to="/admin/dashboard" className="flex gap-x-2 items-center">
          <h3>Dashboard</h3>
        </Link>
        <Link to="/admin/models" className="flex gap-x-2 items-center">
          <h3>Models</h3>
        </Link>
      </div>
    </div>
  );
}

Sidebar.Chat = function SidebarChat() {
  return (
    <div className="w-full h-screen bg-slate-100/50 border-r-slate-300 border-r overflow-hidden flex flex-col gap-y-8">
      <header className="flex">
        <h2 className="text-lg">Travel Right</h2>
      </header>
      <div className="flex flex-1 flex-col gap-3">
        <Link to="#" className="flex">
          <h3>Dashboard</h3>
        </Link>
        <Link to="#" className="">
          <h3>Models</h3>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
