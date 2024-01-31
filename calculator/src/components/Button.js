

// import icons;
const LCButton = ({ text = "button", disabled, onClick, classNames, iconVisible, icon }) => {
  return (
    <button className="success | danger" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default LCButton;