import Image from "next/image";
import utensils from "../../public/pages/utensils.jpg";
import chef from "../../public/pages/chef.jpg";
import style from "./about.module.css";

const About = () => {
  return (
    <div className="p-4 mt-16">
      <h2
        className={`${style.header} capitalize text-5xl font-bold text-center mt-8 mb-16`}
      >
        about us
      </h2>
      <div className="flex flex-col">
        <div className="grid grid-cols-2 place-items-stetch w-full">
          <div className="p-2">
            <p className={`${style.text}`}>
              SecondPartner Fast Foods is an online fast food company focused on
              delivering healthy and affordable meals for the working class. We
              are always opened ready to serve you that meal you have being.....
            </p>
          </div>
          <div className="p-8">
            <Image
              src={chef}
              alt="an image of cooking utensils"
              className="object-fill drop-shadow-lg rounded"
              priority
            />
          </div>
        </div>
        <div className="mt-32">
          <h2 className={`${style.head} capitalize text-5xl`}>Our Dishes</h2>
          <div className="grid grid-cols-2 place-items-stetch w-full">
            <div className="p-8">
              <Image
                src={utensils}
                alt="an image of fried chiken"
                className="object-fill drop-shadow-lg rounded"
                priority
              />
            </div>
            <div className="p-2 pt-4">
              <p className={`${style.text}`}>
                At SecondPartner Fast Foods, our fried rice is more than just a
                dish - it&apos;s an experience. Our skilled chefs have perfected
                the art of creating a harmonious balance of textures and
                tastes.What sets our fried rice apart from the rest? It&apos;s
                all in the details. Our fried rice is a delectable blend of
                perfectly cooked rice, savory vegetables, and a good choice of
                succulent meats. From the careful selection of the freshest
                ingredients to the precise timing and techniques used in the
                cooking process, we go above and beyond to ensure that every
                plate of fried rice is a masterpiece. We take pride in using
                only the freshest ingredients, sourced from local farms and
                suppliers, to ensure that every bite is bursting with flavor.
                The fragrant aroma of our spices and herbs will transport you
                straight to the streets of East Legon, where the bustling food
                scene is always alive with the sizzle and stir of woks. So
                Whether you&apos;re looking for a quick lunch on the go or a
                hearty dinner with friends, our fried rice is sure to satisfy
                your cravings and leave you feeling nourished and satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
