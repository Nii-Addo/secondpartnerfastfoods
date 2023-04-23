import Image from "next/image";
import style from "../menu/menu.module.css";

type cardDetails = {
  title: String;
  image: any;
  details: String;
  extras: String;
  price: String;
};

const Card = ({ title, image, details, extras, price }: cardDetails) => {
  return (
    <>
      <div className={`${style.menucard}  max-w-xs cursor-pointer rounded-lg shadow shadow-drop-lg`}>
        <div className={`${style.menuimage}`}>
          <Image
            className=" max-w-full object-fill"
            src={image}
            alt="menu image"
            priority
          />
          <h3 className="semibold text-2xl tracking-widest mt-4">{title}</h3>
        </div>
        <div className={`${style.menudetails}`}>
          <div className={`${style.menucenter}`}>
            <h1>{title}</h1>
            <p className="text-left">Details: {details}</p>
            <p className="text-left">Extras: {extras}</p>
            <h6 className="text-center mt-4 text-2xl bold">GH₵{price}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
