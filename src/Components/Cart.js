import React from "react";
import { connect } from "react-redux";
import { cartAction } from "../redux";
import thumbnail from "./images/image-product-1-thumbnail.jpg";

function Cart({ addItem, cartAction, price, number, disc }) {
  return (
    <div>
      <img src={thumbnail} />

      <div>
        <p>Fall Limited Edition Sneakers</p>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    addeddItem: state.cart.addeddItem,
    price: state.price.price,
    number: state.qty.qty,
    disc: state.disc.discount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cartAction: (id) => dispatch(cartAction(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
