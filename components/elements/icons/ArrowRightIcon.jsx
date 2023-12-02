import * as React from "react";

export const ArrowRightIcon = ({size = 16}) => {
  return size === 16 ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      stroke="currentColor"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M6.284 4.492h5.723v5.723M3.994 12.506l7.933-7.934"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={28}
      fill="none"
      stroke="currentColor"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
        d="M10.998 6.987h10.014v10.015M6.989 21.01 20.873 7.128"
      />
    </svg>
  );
};
