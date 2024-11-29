import {  useNavigate } from "react-router";
import ProductDetailsGrid from "../components/product-details-grid";
import Button from "../components/ui/button";

function Product() {

  const navigate = useNavigate();


  const onClick = ()=>{
    navigate("/chat/new")
  }

  return (
    <div className="font-Popins">
      <section className="h-[600px] overflow-hidden relative">
        <img
          src="/product-hero.jpg"
          alt=""
          className="h-full w-full object-cover  object-top"
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
          <h1 className=" text-white font-semibold font-Beba text-[80px] max-w-[700px] text-center drop-shadow-md">
            AI-Powered Travel Planning for Sri Lanka
          </h1>
        </div>
      </section>

      <section className="mt-[80px]">
        <h2 className="text-center text-4xl font-bold text-mainColor">
          How We Work
        </h2>
        <h2 className="text-center text-4xl font-bold mt-5">
          We Provide Best Quality AI Service
        </h2>
        <p className="text-center  max-w-[600px] m-auto mt-5">
          Explore Sri Lanka with AI-driven maps, create personalized waypoints,
          enjoy immersive 3D views, discover top-rated restaurants, and plan
          your trip and budget effortlessly.
        </p>
      </section>
      <section>
        <ProductDetailsGrid />
      </section>
      <section className="mt-20">
        <h2 className="text-center text-4xl font-bold text-mainColor">
          Where to go?
        </h2>
        <p className="text-center  max-w-[800px] m-auto mt-5">
          Discover the best places to visit in Sri Lanka with the help of our
          interactive map. From stunning tourist spots and historical landmarks
          to top-rated restaurants and lounges, our map-driven services allow
          you to plan personalized routes and view immersive 3D waypoints to
          make your trip more efficient. Experience real-time traffic updates
          and AI-powered destination insights to make your journey seamless and
          unforgettable.
        </p>
        <div className="w-[600px] h-[700px] m-auto mt-10 rounded-3xl overflow-hidden  shadow-xl border-solid border-white">
          <img src="/realchat.png" alt="" className="w-full h-full " />
        </div>
      </section>
      <div className="flex justify-center mt-10 mb-20">
        <Button title="Let’s Chat With AI"  onClick={onClick}/>
      </div>
    </div>
  );
}

export default Product;
