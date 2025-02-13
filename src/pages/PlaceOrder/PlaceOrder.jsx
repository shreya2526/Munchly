import React from "react";
import "./PlaceOrder.css";
import CartTotal from "../Cart/CartTotal";

const PlaceOrder = () => {
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Phone" />
        <div className="multi-fields">
          <input type="text" placeholder="Street" />
          <input type="text" placeholder="Zip Code" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Landmark" />
          <input type="text" placeholder="Building Number" />
        </div>
      </div>
      <div className="place-order-right">
        <CartTotal />
      </div>
    </form>
  );
};

export default PlaceOrder;
