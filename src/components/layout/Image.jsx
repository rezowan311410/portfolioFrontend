import React from "react";

const Image = ({ imgsrc, className, onClick, itemId }) => {
  const handleClick = () => {
    onClick(itemId);
  };

  return (
    <img
      onClick={handleClick}
      className={className}
      src={imgsrc}
      alt="portfolio-img"
    />
  );
};

export default Image;
