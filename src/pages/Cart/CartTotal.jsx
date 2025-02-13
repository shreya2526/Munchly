import React, { useContext } from "react";
import "./CartTotal.css";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

const CartTotal = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart-total">
      <h2>Cart Totals</h2>
      <div>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>${getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
        </div>
      </div>
      <button onClick={() => navigate("/order")}>PROCEED</button>
    </div>
  );
};

export default CartTotal;
