import React, { useContext, useState } from "react";
import { IoStarSharp } from "react-icons/io5";
import { IoStarOutline } from "react-icons/io5";
import { IoStarHalfSharp } from "react-icons/io5";
import { IoIosAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image, rating }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<IoStarSharp key={i} size={18} />);
      } else if (i - 0.5 === rating) {
        stars.push(<IoStarHalfSharp key={i} size={18} />);
      } else {
        stars.push(<IoStarOutline key={i} size={18} />);
      }
    }
    return stars;
  };

  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-image-container">
        <img className="food-item-image" src={image} alt="" />
      </div>

      <div className="food-item-info">
        {/* Add/Remove Buttons with Counter - Positioned Above the Food Name */}
        {!cartItem[id] ? (
          <IoIosAddCircle
            className="add"
            size={25}
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <AiFillMinusCircle
              className="minus"
              size={25}
              onClick={() => removeFromCart(id)}
            />
            <span className="item-count">{cartItem[id]}</span>
            <IoIosAddCircle
              className="add"
              size={25}
              onClick={() => addToCart(id)}
            />
          </div>
        )}

        {/* Food Name & Rating */}
        <div className="food-item-name-rating">
          <p className="food-item-name">{name}</p>
          <p className="rating">{renderStars(rating)}</p>
        </div>

        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
