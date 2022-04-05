import React, { useState, useEffect } from "react";
import { priceChange, addQty, minusQty, discount } from "../redux";
import { connect } from "react-redux";
import upButton from "./images/icon-plus.svg";
import downButton from "./images/icon-minus.svg";
import cart from "./images/icon-cart.svg";
import ImageLight from "./ImageLight";

function Content(props) {
  const [discountPrice, setDiscountPrice] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const discountPrice = +props.disc * +props.price;
    const price = +props.price;
    setDiscountPrice(discountPrice);
    setPrice(price);
  }, []);

  return (
    <div className="md:flex lg:my-14 lg:mx-20 md:my-12 ">
      <div className="md:flex justify-around">
        <>
          <ImageLight />
        </>
        <div className="m-4  lg:m-20 md:w-1/3 md:m-14 ">
          <div className="">
            <h4 className="text-primary-Orange font-semibold text-sm">
              {" "}
              SNEAKER COMPANY
            </h4>
            <h1 className="font-bold text-xl md:text-3xl">
              {" "}
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-Neutral-GrayishBlue pt-2 md:text-sm">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
          </div>

          <div className="flex justify-between mt-2 md:block">
            <div className="flex">
              <h2 className="font-bold text-xl">${discountPrice.toFixed(2)}</h2>
              <span className="border-2 border-Neutral-LightGrayishBlue bg-Neutral-LightGrayishBlue text-primary-Orange text-sm font-bold ml-2">
                {+props.disc * 100}%{" "}
              </span>
            </div>
            <p className="text-sm text-Neutral-GrayishBlue">
              <del>${price.toFixed(2)}</del>
            </p>
          </div>

          <div className="mt-4 md:flex items-center justify-between">
            <div className="flex justify-around h-2 items-center md:w-1/3 md:justify-between ">
              <img
                src={downButton}
                alt="minus logo"
                onClick={props.minusNumber}
                className="w-4 h-1 cursor-pointer"
              />
              <h2>{props.number}</h2>
              <img
                src={upButton}
                alt="plus logo"
                onClick={props.addNumber}
                className="cursor-pointer"
              />
            </div>
            <div className="flex justify-center items-center mt-4 md:w-1/2">
              <button
                onClick={() => props.setClick(true)}
                className="border-2 border-primary-Orange bg-primary-Orange text-white w-full rounded-md h-10 hover:bg-white hover:text-primary-Orange"
              >
                <img
                  src={cart}
                  alt="cart icon"
                  className="inline text-white mr-2"
                />{" "}
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    price: state.price.price,
    number: state.qty.qty,
    disc: state.disc.discount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    priceChange: (number) => dispatch(priceChange(number)),
    addNumber: () => dispatch(addQty()),
    minusNumber: () => dispatch(minusQty()),
    discount: () => dispatch(discount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
