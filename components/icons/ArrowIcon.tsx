import React from "react";
type ArrowIconProperties = {
  color?: "primary" | "secondary";
  width?: string | number;
  height?: string | number;
  direction?: "up" | "down" | "left" | "right";
};

export const ArrowIcon: React.FC<ArrowIconProperties> = (props) => {
  const { color = "white", direction = "right", width = 20 } = props;

  const arrowDirection = {
    up: "M12.6673 10.333L8.00065 5.66634L3.33398 10.333",
    down: "M12.6663 5.66699L7.99967 10.3337L3.33301 5.66699",
    left: "M10.333 3.33366L5.66634 8.00033L10.333 12.667",
    right: "M5.66699 12.6663L10.3337 7.99967L5.66699 3.33301",
  };
  return (
    <svg
      width={width}
      height="100%"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={arrowDirection[direction]}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
ArrowIcon.displayName = "ArrowIcon";
export default ArrowIcon;
