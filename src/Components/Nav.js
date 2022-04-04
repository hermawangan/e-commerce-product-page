import React, { useState } from "react";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";
import Cart from "./Cart";
import { FaBars } from "react-icons/fa";

function Nav({ click, setClick }) {
  const [mouseOver, setMouseOver] = useState(false);
  const [burgerClick, setBurgerClick] = useState(false);

  const mouseHover = () => {
    setMouseOver(!mouseOver);
  };

  const clickHandler = () => {
    setBurgerClick(!burgerClick);
  };

  return (
    <nav className=" border-solid border-b-2 flex md:justify-center justify-between h-12">
      <div className="flex justify-between lg:w-2/3 w-full">
        <div className=" flex md:flex-row flex-col  w-10/12  ">
          <div className="flex  justify-start items-center h-full">
            <button
              className="md:hidden
             px-2"
              onClick={clickHandler}
            >
              <FaBars />
            </button>
            <img src={logo} alt="brand logo" className="w-1/2 h-1/2  px-2" />
          </div>
          <div
            className={` bg-white  md:block border-2 border-solid md:border-none  ${
              burgerClick ? "block absolute h-full w-2/3" : "hidden"
            } md:static md:w-7/12 `}
          >
            {burgerClick ? (
              <button
                onClick={clickHandler}
                className={`${burgerClick ? "block" : "hidden"} md:hidden`}
              >
                X
              </button>
            ) : null}
            <ul className="flex justify-between md:flex-row flex-col  md:h-full md:items-center ">
              <li className=" ">
                <a
                  href="#/"
                  className="hover:border-b-primary-Orange hover:border-b-2 md:pb-3"
                >
                  Collections
                </a>
              </li>
              <li className="">
                <a
                  href="#/"
                  className="hover:border-b-primary-Orange hover:border-b-2 md:pb-3"
                >
                  Men
                </a>
              </li>
              <li className="">
                <a
                  href="#/"
                  className="hover:border-b-primary-Orange hover:border-b-2 md:pb-3"
                >
                  Women
                </a>
              </li>
              <li className="">
                <a
                  href="#/"
                  className="hover:border-b-primary-Orange hover:border-b-2 md:pb-3"
                >
                  About
                </a>
              </li>
              <li className="">
                <a
                  href="#/"
                  className="hover:border-b-primary-Orange hover:border-b-2 md:pb-3"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className=" flex justify-around items-center">
          <img
            src={cart}
            alt="cart icon"
            onClick={mouseHover}
            className="h-7 cursor-pointer"
          />
          {click ? <span>1</span> : null}
          <img
            src={avatar}
            alt="user avatar"
            className="w-4/12 cursor-pointer hover:border-primary-Orange hover:border-2 rounded-full"
          />
        </div>
        <>
          {mouseOver ? (
            <>
              <Cart click={click} setClick={setClick} />
            </>
          ) : null}
        </>
      </div>
    </nav>
  );
}

export default Nav;
