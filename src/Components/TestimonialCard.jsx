import React from "react";
import "./Styles/TestimonialCard.css";
import { FaStar } from "react-icons/fa";

const colours = {
  orange: "#FFA500",
  grey: "#808080",
};

function TestimonialCard(props) {
  const rating = props.rating;
  const array = Array(5)
    .fill(0)
    .map((_, index) => (index < rating ? colours.orange : colours.grey));

  return (
    <div className="testimonial__cardbox">
      <div className="cardhead">
        <div className="testimonialcard__img"><img src={props.img} alt="Profile Picture"/></div>
        <div className="testimonialcard__name">{props.name}</div>
        {/* stars */}
        <div className="stars">
          {array.map((i) => {
            console.log(i);
            return (
              <label>
                <FaStar className="star" color={i} size={20} />
              </label>
            );
          })}
        </div>
      </div>
      <div className="testimonialcard__title">{props.Title}</div>
      <div className="testimonialcard__text">{props.Text}</div>
    </div>
  );
}

export default TestimonialCard;
