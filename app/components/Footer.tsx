import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 shadow flex-col gap-y-2">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center justify-between h-full">
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <p className="mr-4 hover:underline md:mr-6 hover:text-white">
              About
            </p>
          </li>
          <li>
            <p className="mr-4 hover:underline md:mr-6 hover:text-white">
              Privacy Policy
            </p>
          </li>
          <li>
            <p className="mr-4 hover:underline md:mr-6 hidden lg:block hover:text-white">
              Licensing
            </p>
          </li>
          <li>
            <p className="mr-4 hover:underline md:mr-6 hidden lg:block hover:text-white">
              Contact
            </p>
          </li>
        </ul>
        <span className="text-sm text-gray-300 hover:text-white sm:text-center dark:text-gray-400">
          Copyright © 2023 made by <Link href="/">godfather</Link>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
