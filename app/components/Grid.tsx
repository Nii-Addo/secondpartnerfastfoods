import Image from "next/image";
import menumain from "../../public/menu/menumain.jpg";
import fooddouble from "../../public/menu/fooddouble.jpg";
import foodvariety from "../../public/menu/foodvariety.jpg";
import foodwithdrink from "../../public/menu/foodwithdrinks.jpg";
import plainfood from "../../public/menu/plainfood.jpg";

const Grid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid">
        <div>
          <Image
            width={150}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={menumain}
            alt=""
            priority
          />
        </div>
        <div>
          <Image
            width={100}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={fooddouble}
            alt=""
            priority
          />
        </div>
        <div>
          <Image
            width={100}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={foodwithdrink}
            alt=""
            priority
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            width={100}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={foodwithdrink}
            alt=""
            priority
          />
        </div>
        <div>
          <Image
            width={120}
            height={150}
            className="h-auto max-w-full rounded-lg"
            src={plainfood}
            alt=""
            priority
          />
        </div>
        <div>
          <Image
            width={100}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={foodvariety}
            alt=""
            priority
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            width={150}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={fooddouble}
            alt=""
            priority
          />
        </div>
        <div>
          <Image
            width={100}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={menumain}
            alt=""
            priority
          />
        </div>
        <div>
          <Image
            width={100}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={plainfood}
            alt=""
            priority
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <Image
            width={120}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={foodvariety}
            alt=""
            priority
          />
        </div>
        <div>
          <Image
            width={120}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={fooddouble}
            alt=""
            priority
          />
        </div>
        <div>
          <Image
            width={120}
            height={100}
            className="h-auto max-w-full rounded-lg"
            src={foodwithdrink}
            alt=""
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Grid;
