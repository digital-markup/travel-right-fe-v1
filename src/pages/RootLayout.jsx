import { Link, Outlet } from "react-router";
import Button from "../components/ui/button";

function RootLayout() {
  return (
    <div >
      <div className="container m-auto">
        <nav className="w-full h-14 flex justify-between items-center shadow-md px-8 md:px-0">
          <h2 className="md:mx-8 text-lg">
            <Link to="/">Travel Right</Link>
          </h2>
          <ul className="flex items-center  gap-x-4 px-8">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/pricing">Pricing</Link>
            </li>
            <li>
              <Button title={"Sign In"} />
            </li>
          </ul>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
