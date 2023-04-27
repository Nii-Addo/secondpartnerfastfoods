import Link from "next/link";
import "../css/home.css";

const Actions = () => {
  return (
    <div className="actions-container flex justify-center align-center h-full w-full ">
      <div className="actions-card">
        <Link href="/menu">
          <h3 className="title font-bold">Check out our menu</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </Link>
      </div>
      <div className="actions-card">
        <Link href="/about">
          <h3 className="title font-bold">Find out more about us</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </Link>
      </div>
      <div className="actions-card">
        <Link href="/contact">
          <h3 className="title font-bold">Order from us here</h3>
          <div className="bar">
            <div className="emptybar"></div>
            <div className="filledbar"></div>
          </div>
          <div className="circle">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
              <circle className="stroke" cx="60" cy="60" r="50" />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Actions;
