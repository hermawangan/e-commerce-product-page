import React, { useState } from "react";
import productOneThumbnail from "./images/image-product-1-thumbnail.jpg";
import productTwoThumbnail from "./images/image-product-2-thumbnail.jpg";
import productThreeThumbnail from "./images/image-product-3-thumbnail.jpg";
import productFourThumbnail from "./images/image-product-4-thumbnail.jpg";
import productOne from "./images/image-product-1.jpg";
import productTwo from "./images/image-product-2.jpg";
import productThree from "./images/image-product-3.jpg";
import productFour from "./images/image-product-4.jpg";
import nextIcon from "./images/icon-next.svg";
import prevIcon from "./images/icon-previous.svg";

function ImageLightbox({ src, alt, Wrapper = "div" }) {
  const [current, setCurrent] = useState(src);

  const [couroselData, setCouroselData] = useState([
    {
      image: productOne,
      thumbnail: productOneThumbnail,
      id: 1,
    },
    {
      image: productTwo,
      thumbnail: productTwoThumbnail,
      id: 2,
    },
    {
      image: productThree,
      thumbnail: productThreeThumbnail,
      id: 3,
    },
    {
      image: productFour,
      thumbnail: productFourThumbnail,
      id: 4,
    },
  ]);
  const length = couroselData.length;

  const next = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prev = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Wrapper>
      <button className="left-button" onClick={prev}>
        <img src={prevIcon} alt="prev Icon" />
      </button>
      <button className="right-button" onClick={next}>
        <img src={nextIcon} alt="next Icon" />
      </button>
      <>
        {couroselData.map((slide, index) => {
          return (
            <div key={slide.id}>
              {index === current && (
                <img src={slide.image} key={slide.id} alt="shoe" />
              )}
            </div>
          );
        })}
        {couroselData.map((slide, index) => {
          return (
            <div key={slide.id}>
              <img
                src={slide.thumbnail}
                className={`${
                  index === current ? "border-2 border-solid" : null
                }`}
                alt={alt}
                onClick={() => setCurrent(index)}
              />
            </div>
          );
        })}
      </>
    </Wrapper>
  );
}

export default ImageLightbox;
