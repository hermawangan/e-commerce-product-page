import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import thumbnail from "./images/image-product-1-thumbnail.jpg";
import basketDelete from "./images/icon-delete.svg";

function Cart({ price, number, disc, click, setClick }) {
  const [discountPrice, setDiscountPrice] = useState(0);

  useEffect(() => {
    const discountPrice = +disc * price;
    setDiscountPrice(discountPrice);
  }, [click, disc, price]);

  const clickDeleteHandler = () => {
    setClick(false);
  };

  return (
    <>
      {click ? (
        <div>
          <img src={thumbnail} alt="thumbnail" />

          <div>
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <h2>${discountPrice.toFixed(2)}</h2>
              <span>X {number} </span>{" "}
              <span>${number * discountPrice.toFixed(2)}</span>
            </div>
            <div>
              <img
                src={basketDelete}
                alt="dusbin"
                onClick={clickDeleteHandler}
              />
            </div>
          </div>

          <button>Checkout</button>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </>
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
