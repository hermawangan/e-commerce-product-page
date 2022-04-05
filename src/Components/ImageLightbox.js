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

function ImageLightbox({ src = 0, alt, Wrapper = "div" }) {
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
    <Wrapper className="md:relative md:w-1/3 md:left-1/3">
      <button
        className="left-button absolute top-1/3 left-5 bg-white rounded-full w-9 h-9 flex justify-center items-center border-2 border-white md:-left-4 z-10"
        onClick={prev}
      >
        <img src={prevIcon} alt="prev Icon" />
      </button>
      <button
        className="right-button absolute right-5 top-1/3 bg-white rounded-full w-9 h-9 flex justify-center items-center border-2 border-white md:-right-4 z-10"
        onClick={next}
      >
        <img src={nextIcon} alt="next Icon" />
      </button>
      <>
        {couroselData.map((slide, index) => {
          return (
            <div key={slide.id}>
              {index === current && (
                <img
                  src={slide.image}
                  key={slide.id}
                  alt="shoe"
                  className="md:rounded-xl z-0"
                />
              )}
            </div>
          );
        })}
        <div className="hidden md:flex justify-around mt-4">
          {couroselData.map((slide, index) => {
            return (
              <div key={slide.id} className="">
                <img
                  src={slide.thumbnail}
                  className={`${
                    index === current
                      ? "border-2 border-primary-Orange opacity-75"
                      : null
                  } rounded-xl h-16 hover:opacity-50 cursor-pointer`}
                  alt={alt}
                  onClick={() => setCurrent(index)}
                />
              </div>
            );
          })}
        </div>
      </>
    </Wrapper>
  );
}

export default ImageLightbox;
