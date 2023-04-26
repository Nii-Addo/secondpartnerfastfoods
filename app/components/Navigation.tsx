"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-small-resized.svg";
import SmallNavBar from "./SmallNavBar";
import "../globals.css";

const Navigation = () => {
  return (
    <nav className="nav flex flex-row justify-between bg-white w-full h-28 z-20 top-0 left-0 fixed border-solid border-b border-dark">
      <div className="max-w-screen-xl flex flex-wrap gap-x-16 md:flex-row md:items-center md:justify-center md:mx-auto">
        <div className="md:flex md:flex-row md:gap-x-12 hidden">
          <div className="leading-9 font-semibold hover:text-red-600 antialiased uppercase">
            <Link href="/">home</Link>
          </div>
          <div className="leading-9 font-semibold hover:text-red-600  antialiased uppercase">
            <Link href="/menu">menu</Link>
          </div>
        </div>
        <div className="h-50 pt-4 mt-2 md:pt-0 md:mt-0">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="second partner logo"
              className="logo h-full w-3/5 md:w-full object-fill"
              priority
            />
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
      <SmallNavBar />
    </nav>
  );
};

export default Navigation;
