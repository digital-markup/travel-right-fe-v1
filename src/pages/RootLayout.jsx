import { Link, Outlet } from "react-router";
import Button from "../components/ui/button";
import Footer from "../components/footer";

function RootLayout() {
  return (
    <div >
      <div className="shadow-md font-Popins">
        <nav className="container m-auto w-full h-20 flex justify-between items-center px-8 md:px-0">
          <h2 className="md:mx-8 text-lg">
            <Link className="flex justify-center items-center"  to="/"><img src="/logo-tp.png" className="w-[80px] h-full" alt="" /><span className="font-bold text-mainColor text-xl">Travel Right</span></Link>
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
       <Footer/>
      </main>
    </div>
  );
}

export default RootLayout;
