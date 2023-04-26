import Link from "next/link";
import { useState } from "react";
import "../globals.css";

export default function SmallNavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="md:hidden">
      <div className="flex py-0 justify-end mt-8 pr-2">
        <button
          className="p-2 text-gray-700 rounded-md outline-none"
          onClick={() => setNavbar(!navbar)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div>
        <div
          className={`flex-1 justify-self-center z-40 pb-2 mt-8 bg-white ${
            navbar ? "showMenuNav" : "hidden"
          }`}
        >
          <div className="flex py-0 justify-end mt-8 pr-2">
            <button
              className="text-gray-700 rounded-md outline-none absolute top-0 right-0 px-4 py-4"
              onClick={() => setNavbar(!navbar)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col min-h-[250px] items-center justify-center space-y-8">
            <div className="leading-9 font-semibold hover:text-red-600 antialiased uppercase">
              <Link href="/" onClick={() => setNavbar(!navbar)}>
                home
              </Link>
            </div>
            <div className="leading-9 font-semibold hover:text-red-600  antialiased uppercase">
              <Link href="/menu" onClick={() => setNavbar(!navbar)}>
                menu
              </Link>
            </div>
            <div className="leading-9 font-semibold hover:text-red-600 antialiased uppercase">
              <Link href="/about" onClick={() => setNavbar(!navbar)}>
                about
              </Link>
            </div>
            <div className="leading-9 font-semibold hover:text-red-600 antialiased uppercase">
              <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
