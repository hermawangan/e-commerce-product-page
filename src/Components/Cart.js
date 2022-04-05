import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import thumbnail from "./images/image-product-1-thumbnail.jpg";
import basketDelete from "./images/icon-delete.svg";

function Cart({ price, number, disc, click, setClick }) {
  const [discountPrice, setDiscountPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const discountPrice = +disc * price;
    const totalPrice = discountPrice * number;

    setTotalPrice(totalPrice.toFixed(2));
    setDiscountPrice(discountPrice);
  }, [click, disc, price, number]);

  const clickDeleteHandler = () => {
    setClick(false);
  };

  return (
    <div className=" absolute   bg-white border-2 border-solid w-11/12 h-2/5 md:h-1/3 top-14 left-4 rounded-md md:w-1/3 lg:left-1/2 md:left-2/3 md:top-16 z-20">
      <h4 className="text-bold border-b-2 border-solid p-4 font-bold">Cart</h4>
      {click ? (
        <>
          <div className="flex justify-between items-center p-4">
            <img src={thumbnail} alt="thumbnail" className="w-1/6 rounded" />

            <div className="text-Neutral-DarkGrayishBlue">
              <p>Fall Limited Edition Sneakers</p>
              <span>${discountPrice.toFixed(2)}</span>
              <span> x {number} </span>{" "}
              <span className="font-bold">${totalPrice}</span>
            </div>
            <div>
              <img
                src={basketDelete}
                alt="dusbin"
                onClick={clickDeleteHandler}
                className="cursor-pointer"
              />
            </div>
          </div>

          <button className="border-2 border-primary-Orange w-11/12 mx-4 text-white bg-primary-Orange rounded-lg hover:text-primary-Orange hover:bg-white h-10 ">
            Checkout
          </button>
        </>
      ) : (
        <p className="text-center text-Neutral-DarkGrayishBlue pt-20">
          Your cart is empty.
        </p>
      )}
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

export default connect(mapStateToProps)(Cart);
