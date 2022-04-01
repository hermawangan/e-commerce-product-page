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
    <div>
      <>
        <ImageLight />
      </>
      <div>
        <h4> Sneaker Company</h4>
        <h1> Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
      </div>

      <div>
        <h2>${discountPrice.toFixed(2)}</h2>
        <span>{+props.disc * 100}% </span>
        <h2>${price.toFixed(2)}</h2>
      </div>

      <div>
        <div>
          <img src={downButton} alt="minus logo" onClick={props.minusNumber} />
          <h2>{props.number}</h2>
          <img src={upButton} alt="plus logo" onClick={props.addNumber} />
        </div>
        <button onClick={() => props.setClick(true)}>
          <img src={cart} alt="cart icon" /> Add to Cart
        </button>
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
