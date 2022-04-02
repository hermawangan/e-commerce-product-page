import React, { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";
import Cart from "./Cart";

function Nav({ click, setClick }) {
  const [mouseOver, setMouseOver] = useState(false);
  const [burgerClick, setBurgerClick] = useState(false);

  const mouseHover = () => {
    setMouseOver(true);
  };

  const mouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <>
      <div className=" flex justify-between">
        <div className=" flex md:flex-row flex-col">
          <img src={logo} alt="brand logo" className="w-1/2 h-1/2" />
          <div className="bg-white">
            <ul className="flex justify-between md:flex-row flex-col ">
              <li className="p-6">
                <a href="#">Collections</a>
              </li>
              <li className="p-6">
                <a href="#">Men</a>
              </li>
              <li className="p-6">
                <a href="#">Women</a>
              </li>
              <li className="p-6">
                <a href="#">About</a>
              </li>
              <li className="p-6">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <img src={cart} alt="cart icon" onMouseOver={mouseHover} />
          {click ? <span>1</span> : null}
          <img src={avatar} alt="user avatar" />
        </div>
        <>
          {mouseOver ? (
            <div>
              <button onClick={mouseLeave}>X</button>
              <Cart click={click} setClick={setClick} />
            </div>
          ) : null}
        </>
      </div>
    </>
  );
}

export default Nav;
