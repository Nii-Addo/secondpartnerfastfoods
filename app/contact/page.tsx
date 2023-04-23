import OrderActions from "../components/OrderActions";
import Card from "../components/ContactCard";
import address from "../../public/icons/address-location-icon.svg";
import time from "../../public/icons/lunch-time-icon.svg";
import community from "../../public/icons/online-community-icon.svg";
import phone from "../../public/icons/verify-phone-number-black-icon.svg";
import style from "./contact.module.css";

const page = () => {
  return (
    <div className="flex flex-col p-4 mt-16">
      <h3 className="text-2xl underline underline-offset-8 decoration-4 decoration-red-600 ml-4 capitalize">
        contact us
      </h3>
      <div className="grid grid-col-1 md:grid-cols-2 xl:grid-cols-4 gap-16 w-full justify-items-stretch pt-8">
        <div>
          <Card
            title={"Address"}
            image={address}
            details={"East Legon, Accra \n secondpartnerfastfoods@gmail.com"}
          />
        </div>
        <div>
          <Card title={"Phone"} image={phone} details={"0249655074"} />
        </div>
        <div>
          <Card
            title={"Socials"}
            image={community}
            details={"@secondpartnerfastfoods"}
          />
        </div>
        <div>
          <Card
            title={"Working"}
            image={time}
            details={"Open Monday to Sunday - 24Hrs"}
          />
        </div>
      </div>
      <div
        className={`${style.sec} justify-center mt-24 bg-yellow-300 p-8 rounded`}
      >
        <h2 className={`${style.head} capitalize text-4xl font-bold mt-8 mb-8`}>
          Let us handle your food needs
        </h2>
        <p className={`${style.text} mb-8 `}>
          We&apos;'d love to hear from you. Send a message to the whatsapp
          number provided on the phone card above to give us any suggesstion to
          help us get better.
          <br />
          If you would want to invest in us to see us grow then please dont
          hesitate to email us using the email address on the address card.
          Order from us using any of the steps below. Thank you for believing in
          us.
        </p>
        <div>
          <OrderActions />
        </div>
      </div>
    </div>
  );
};

export default page;
