import React from "react";
import PropTypes from "prop-types";

const maxPossibleRating = 5;

export const Rating = React.memo(({ value, text, color }) => {
  const starElements = [];
  for (let i = 0; i < maxPossibleRating; i++) {
    let iconClass = "far fa-star";
    if (value > i) {
      //es mas grande por 0.5 o un entero?
      iconClass = value > i + 0.5 ? "fas fa-star" : "fas fa-star-half-alt";
    }
    starElements.push(<i key={i} style={{ color }} className={iconClass}></i>);
  }

  return (
    <div>
      {starElements} {text}
    </div>
  );
});

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};
