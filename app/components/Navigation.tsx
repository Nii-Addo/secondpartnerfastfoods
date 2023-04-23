import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-small-resized.svg";
import "../globals.css";

const Navigation = () => {
  return (
    <nav className="nav bg-white dark:bg-white w-full h-28 z-20 top-0 left-0 fixed border-solid border-b border-dark">
      <div className="max-w-screen-xl flex flex-wrap gap-x-16 md:flex-row items-center justify-center mx-auto">
        <div className="md:flex md:flex-row md:gap-x-12 hidden">
          <div className="leading-9 font-semibold hover:text-red-600 antialiased uppercase">
            <Link href="/">home</Link>
          </div>
          <div className="leading-9 font-semibold hover:text-red-600  antialiased uppercase">
            <Link href="/menu">menu</Link>
          </div>
        </div>
        <div className="h-50">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="second partner logo"
              className="logo h-full w-100 object-fill"
              priority
            />

            {/* <span>
              <h1 className="text-xl leading-10 font-semibold self-center whitespace-nowrap antialiased uppercase">
                second partner fast food
              </h1>
            </span> */}
          </Link>
        </div>
        <div className="md:flex md:flex-row md:justify-center md:gap-x-12 hidden">
          <div className="leading-9 font-semibold hover:text-red-600 antialiased uppercase">
            <Link href="/about">about</Link>
          </div>
          <div className="leading-9 font-semibold hover:text-red-600 antialiased uppercase">
            <Link href="/contact">contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
