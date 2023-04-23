import Image from "next/image";
import review1 from "../../public/temp/review1.jpg";
import lart from "../../public/pages/lart.jpg";
import beno from "../../public/pages/beno.jpg";

const Testinonial = () => {
  return (
    <div>
      <div className="grid mb-8 shadow-sm  md:mb-12 md:grid-cols-3 gap-8 ">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Its worth every single hype
            </h3>
            <p className="my-4">
              Charlie the food East Legon Fried Rice dey do dey parp pass more
              food for East Legon here,whaaaaat. Its worth every single hype
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <Image
              height={100}
              width={100}
              className="rounded-full w-9 h-9"
              src={lart}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Lartman</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                @Gabbylart
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Food so delicious
            </h3>
            <p className="my-4">
              I tasted East Legon Fried Rice for the first time yesterday and I
              can confess, its the best in Accra. Package so beautiful, food so
              delicious.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <Image
              height={100}
              width={100}
              className="rounded-full w-9 h-9"
              src={beno}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Beno Sarkcess</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                @BenopaOnyx1
              </div>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Everything on point just as wanted
            </h3>
            <p className="my-4">
              Food was great!!! I&apos;'m very hard to impress with food but
              this is good. From customer service, packaging, message and the
              food itself. Worth every penny. Everything on point just as
              wanted.
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center space-x-3">
            <Image
              height={100}
              width={100}
              className="rounded-full w-9 h-9"
              src={review1}
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium dark:text-white text-left">
              <div>Some customer</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                from somewhere
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Testinonial;
