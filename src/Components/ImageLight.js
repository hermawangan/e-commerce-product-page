import React, { useState } from "react";
import productOneThumbnail from "./images/image-product-1-thumbnail.jpg";
import productTwoThumbnail from "./images/image-product-2-thumbnail.jpg";
import productThreeThumbnail from "./images/image-product-3-thumbnail.jpg";
import productFourThumbnail from "./images/image-product-4-thumbnail.jpg";
import productOne from "./images/image-product-1.jpg";
import productTwo from "./images/image-product-2.jpg";
import productThree from "./images/image-product-3.jpg";
import productFour from "./images/image-product-4.jpg";
import ImageLightbox from "./ImageLightbox";

function ImageLight() {
  const [current, setCurrent] = useState(0);
  const [image, setImage] = useState(productOne);
  const [active, setActive] = useState("imageOne");
  const [click, setClick] = useState(false);

  const imageHandlerTwo = (e) => {
    setImage(productTwo);
    setCurrent(1);

    setActive(e.target.id);
  };
  const imageHandlerThree = (e) => {
    setImage(productThree);
    setCurrent(2);
    setActive(e.target.id);
  };
  const imageHandlerFour = (e) => {
    setImage(productFour);
    setCurrent(3);
    setActive(e.target.id);
  };
  const imageHandlerOne = (e) => {
    setImage(productOne);
    setCurrent(4);
    setActive(e.target.id);
  };

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <div>
      <div>
        <img src={image} alt="shoe" onClick={clickHandler} />
        {click ? (
          <div>
            <button onClick={clickHandler}>X</button>
            <ImageLightbox src={current} alt="shoes" />
          </div>
        ) : null}
      </div>
      <div>
        <img
          id="imageOne"
          onClick={imageHandlerOne}
          src={productOneThumbnail}
          alt="shoe"
          className={`${
            active === "imageOne" ? "border-2 border-solid" : null
          }`}
        />
        <img
          id="imageTwo"
          onClick={imageHandlerTwo}
          src={productTwoThumbnail}
          alt="shoe"
          className={`${
            active === "imageTwo" ? "border-2 border-solid" : null
          }`}
        />
        <img
          id="imageThree"
          onClick={imageHandlerThree}
          src={productThreeThumbnail}
          alt="shoe"
          className={`${
            active === "imageThree" ? "border-2 border-solid" : null
          }`}
        />
        <img
          id="imageFour"
          onClick={imageHandlerFour}
          src={productFourThumbnail}
          alt="shoe"
          className={`${
            active === "imageFour" ? "border-2 border-solid" : null
          }`}
        />
      </div>
    </div>
  );
}

export default ImageLight;
