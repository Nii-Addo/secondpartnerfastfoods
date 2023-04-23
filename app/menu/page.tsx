import Grid from "../components/Grid";
import MenuCard from "../components/MenuCard";
import menumain from "../../public/menu/menumain.jpg";
import fooddouble from "../../public/menu/fooddouble.jpg";
import foodvariety from "../../public/menu/foodvariety.jpg";
import foodwithdrink from "../../public/menu/foodwithdrinks.jpg";
import plainfood from "../../public/menu/plainfood.jpg";

import style from "./menu.module.css";

type MenuList = {
  title: String;
  image: any;
  details: String;
  extras: String;
  price: String;
};

const menuList: MenuList[] = [
  {
    title: "Small",
    image: menumain,
    details: "Half cup of East Legon fried rice with 1 piece of chicken",
    extras: "1 bottle of water",
    price: "50",
  },
  {
    title: "Standard",
    image: foodvariety,
    details: "Half cup of East Legon fried rice with 1 piece of chicken",
    extras: "1 Natural pineapple juice, 1 bottle of water",
    price: "60",
  },
  {
    title: "Medium",
    image: fooddouble,
    details: "One(1) cup of East Legon fried rice with 1 piece of chicken",
    extras: "1 bottle of water",
    price: "70",
  },
  {
    title: "Large",
    image: foodvariety,
    details: "One(1) cup of East Legon fried rice with 1 piece of chicken",
    extras: "Natural pineapple juice, 1 bottle of water",
    price: "80",
  },
  {
    title: "Deluxe",
    image: plainfood,
    details:
      "One(1) cup of East Legon fried rice with two(2) pieces of chicken",
    extras: "1 Natural pineapple juice, 1 bottle of water",
    price: "90",
  },
  {
    title: "Premium",
    image: foodwithdrink,
    details:
      "One(1) cup of East Legon fried rice with three(3) pieces of chicken",
    extras: "1 Natural pineapple juice, 1 bottle of water ",
    price: "100",
  },
];

const page = () => {
  return (
    <div className={`${style.menu} flex flex-col bg-dark dark:bg-dark pb-4`}>
      <div
        className={`${style.mimage} bg-yellow-300 w-full mx-auto pl-4 py-4 flex flex-row `}
      >
        <div className="w-1/2 md:flex hidden">
          <Grid />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl text-center text-red-100 bold tracking-widest italic h-40 mt-36 pt-8 ">
            Check out our <br />
            <br className="hidden md:flex" />
            <span className="bg-green-700 text-white mt-2">menu</span> below
          </h2>
        </div>
      </div>
      <div className="pt-28 pl-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 auto-cols-fr gap-y-12">
          {menuList.map((item, index) => (
            <MenuCard
              title={item.title}
              image={item.image}
              details={item.details}
              extras={item.extras}
              price={item.price}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
