import Card from "../components/ui/card";

function Dashboard() {
  return (
    <div className="w-full min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 px-20 py-8">
          <header>
            <h2 className="text-2xl">Dashboard</h2>
          </header>
          <div className="w-full h-full flex items-center gap-x-4 justify-start">
            <Card.Upload />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
