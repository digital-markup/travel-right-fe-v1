import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import HomeSlider from "../components/home-slider";
import PlacesCard from "../components/ui/PlacesCard";
import FeaturesGrid from "../components/FeaturesGrid";
import ProcessGrid from "../components/ProcessGrid";
import Button from "../components/ui/button";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate("/product");
  };

  return (
    <div className="font-Popins">
      <HomeSlider />
      <div className="font-Beba relative">
        <h2 className="text-black text-[200px] opacity-10 text-center">
          Ayubowan
        </h2>
        <h2 className="text-mainColor text-[75px] absolute bottom-0 top-[150px] left-0 right-0 m-auto text-center ">
          Welcome to Sri Lanka
        </h2>
      </div>

      <div className="container m-auto px-5 ">
        <h2 className="font-semibold text-2xl mb-5">
          Discover what awaits you on your upcoming island vacation.
        </h2>
        <div>
          <Swiper
            className="pb-5"
            spaceBetween={40}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>
              {
                <PlacesCard
                  title={"Temple of the Tooth"}
                  description={
                    "Gautama Buddha's left canine tooth is housed in the Temple of the Sacred Tooth Relic, a recognised site of worship. The temple was designated a world heritage site by UNESCO in 1988, and hundreds of local and foreign tourists and devotees visit it every day."
                  }
                  image={"/home/maligawa.jpeg"}
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                <PlacesCard
                  title={"Ruwanweli Maha Seya"}
                  description={
                    "Ruwanweli Maha Seya (Ruwanweliseya) is one of the most venerated Buddhist sites in Sri Lanka built by the great king Dutugamunu who reigned from 137 BCE to 119 BCE from Anuradhapura."
                  }
                  image={"/home/ruwn.jpeg"}
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                <PlacesCard
                  title={"Nine Arches Bridge"}
                  description={
                    "The Nine Arch Bridge also called the Bridge in the Sky, is a viaduct bridge in Sri Lanka and one of the best examples of colonial-era railway construction in the country."
                  }
                  image={"/home/9arch.jpeg"}
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                <PlacesCard
                  title={"Sigiriya"}
                  description={
                    "Sigiriya was designated as a world heritage site in 1982. Sigiriya is famous for it's palace ruins on top of a massive 200 meter high rock surrounded by the remains of an extensive network of gardens, reservoirs and other structures. "
                  }
                  image={"/home/sigiri.jpeg"}
                />
              }
            </SwiperSlide>
            <SwiperSlide>
              {
                <PlacesCard
                  title={"Nine Arches Bridge"}
                  description={
                    "The Nine Arch Bridge also called the Bridge in the Sky, is a viaduct bridge in Sri Lanka and one of the best examples of colonial-era railway construction in the country."
                  }
                  image={""}
                />
              }
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="bg-[#EDF2F3] h-[300px] flex justify-center items-center mt-5">
        <h2 className="font-bold text-4xl max-w-4xl text-center m-auto">
          AI-Enhanced Travel Companion: Personalize Your Journey with Smart
          Recommendations and Real-Time Assistance
        </h2>
      </div>

      <div className="mt-10">
        <h2 className="text-center text-4xl font-bold">
          Services We <span className="text-mainColor ">Provide</span>
        </h2>
        <FeaturesGrid />
      </div>

      <div className="mt-10">
        <h2 className="text-center text-4xl font-bold">
          Things You <span className="text-mainColor ">Need</span>
        </h2>
        <p className="text-center mt-2">
          We want to make sure your vacation is safe, well-planned, and within
          your budget.
        </p>
        <ProcessGrid />
      </div>

      <section>
        <img className="m-auto w-[300px]" src="/logo-tp.png" alt="" />
        <h2 className="text-center text-4xl font-bold max-w-xl m-auto">
          Get explanation. Track down locations. Increase your intelligence.
        </h2>
        <div className="flex justify-center mt-5  ">
          <Button title="Start Now" onClick={onClick} />
        </div>
      </section>

      <section className="my-20">
        <h2 className="text-center text-4xl font-bold max-w-xl m-auto">
          We are partnered with
        </h2>
        <div className="flex justify-center items-center gap-10 mt-10">
          <div className="h-[100px]">
            <img src="/partners/a.jpeg" alt="" className="w-full h-full" />
          </div>
          <div className="h-[100px]">
            <img src="/partners/b.png" alt="" className="w-full h-full" />
          </div>
          <div className="h-[100px]">
            <img src="/partners/c.png" alt="" className="w-full h-full" />
          </div>
          <div className="h-[100px]">
            <img src="/partners/d.jpeg" alt="" className="w-full h-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
