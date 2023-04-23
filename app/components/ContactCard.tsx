import Image from "next/image";
import style from "../contact/contact.module.css";

type cardDetails = {
  title: String;
  image: any;
  details: String;
};

const ContactCard = ({ title, image, details }: cardDetails) => {
  return (
    <>
      <div
        className={`${style.card} max-w-xs text-base flex flex-col justify-center relative cursor-pointer bg-white border border-gray-100 rounded-lg shadow
      drop-shadow-xl w-full`}
      >
        <Image
          className={`${style.icon} flex w-full h-24 rounded-full justify-center items-center object-fill  mx-auto text-xs`}
          src={image}
          alt="information icon"
          priority
        />
        <div className="mt-16 mb-16 text-center">
          <h3
            className={`${style.title} mb-2 mt-7 text-4xl text-center font-semi bold tracking-wide text-gray-900 w-100 m-0 uppercase`}
          >
            {title}
          </h3>
          <p
            className={`${style.cardtext} pt-4 mt-5 max-h-0 opacity-0 font-normal text-gray-500 break-words`}
          >
            {details}
          </p>
        </div>
      </div>
    </>
  );
};

export default ContactCard;
