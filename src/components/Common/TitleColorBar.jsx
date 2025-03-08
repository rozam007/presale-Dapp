import React from "react";

const TitleColorBar = ({
  color,
  width,
  height,
  top,
  right,
  mdTop,
  mdRight,
}) => {
  return (
    <div
      className={`absolute z-0 ${width} ${height} ${color} ${top} ${right} ${mdTop} ${mdRight}`}
    ></div>
  );
};

export default TitleColorBar;
