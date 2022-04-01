import React, { useState, useEffect } from "react";
import logo from "./images/logo.svg";
import cart from "./images/icon-cart.svg";
import avatar from "./images/image-avatar.png";
import Cart from "./Cart";

function Nav({ click, setClick }) {
  const [mouseOver, setMouseOver] = useState(false);

  const mouseHover = () => {
    setMouseOver(true);
  };

  const mouseLeave = () => {
    setMouseOver(false);
  };

  return (
    <>
      <div>
        <img src={logo} alt="brand logo" />
        <div>
          <ul>
            <li>
              <a href="#">Collections</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
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
