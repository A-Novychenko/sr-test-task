export const MinusIcon = ({size = 16}) => {
  return size === 16 ? (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
      <path
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 8h8"
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none">
      <path
        stroke="#173D33"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 14h14"
      />
    </svg>
  );
};
