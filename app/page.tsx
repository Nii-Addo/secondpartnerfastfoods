import Reviews from "./components/Testimonial";
import ProductOfferings from "./components/ProductOfferings";
import LandingText from "./components/LandingText";
import Actions from "./components/Actions";
import bg from "../public/temp/Prashad.jpeg";
import "./css/home.css";

export default function Home() {
  return (
    <div className="home">
      <div className="">
        <div
          className="landing"
          style={{
            backgroundImage: `url(${bg.src})`,
            width: "100%",
            height: "100%",
          }}
        ></div>
        <div className="overlay">
          <h2 className="text-4xl md:text-7xl text-center bold tracking-widest h-40 mt-32 capitalize">
            Welcome To <br />
            <span className="mt-32">SecondPartner fast foods</span>
          </h2>
        </div>
        <section className="content">
          <div className="mb-16">
            <LandingText />
          </div>
          <div className="mb-32">
            <h3 className="text-4xl ml-4 md:ml-0  md:text-center font-bold text-gray-900">
              What we offer you
            </h3>
            <ProductOfferings />
          </div>
          <div className="mb-32 px-4">
            <h2 className="mb-2 mt-7 text-4xl text-center font-bold text-gray-900">
              What our customers say
            </h2>
            <Reviews />
          </div>
          <div className="actions flex flex-col px-4 md:px-0">
            <h3 className="text-4xl text-center font-bold text-gray-900 mb-8">
              Get your next meal delivered
            </h3>
            <Actions />
          </div>
        </section>
      </div>
    </div>
  );
}
