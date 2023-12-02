export const AddIcon = ({size = 16}) => {
  return size === 16 ? (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none">
      <path
        stroke="#97D28B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4 8h8M8 12V4"
      />
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width={28} height={28} fill="none">
      <path
        stroke="#97D28B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M7 14h14M14 21V7"
      />
    </svg>
  );
};
