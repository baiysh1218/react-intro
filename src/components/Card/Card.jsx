import React, { useState } from "react";
import "./Card.css";

const Card = ({ item, activeCard, setActiveCard }) => {
  // console.log(item);
  const [like, setLike] = useState(false);
  return (
    <div
      style={{
        border: activeCard === item.id ? "3px solid grey" : "none",
        padding: "40px",
      }}
      onClick={() => setActiveCard(item.id)}>
      <h2>{item.model}</h2>
      <img className="car-image" src={item.image} alt="" />
      <div>
        {like ? (
          <img
            onClick={() => setLike(!like)}
            alt="like"
            width="50px"
            src="https://img.icons8.com/external-those-icons-fill-those-icons/344/external-like-feedback-those-icons-fill-those-icons.png"
          />
        ) : (
          <img
            onClick={() => setLike(!like)}
            alt="like"
            width="50px"
            src="https://img.icons8.com/external-those-icons-lineal-those-icons/344/external-like-feedback-those-icons-lineal-those-icons.png"
          />
        )}
      </div>
    </div>
  );
};

export default Card;
