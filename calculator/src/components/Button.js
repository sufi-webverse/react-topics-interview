

// import icons;

const LCButton = ({ text = "button", disabled, onClick, classNames, iconVisible, icon }) => {
  return (
    <button className="bg-indigo-700" disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

export default LCButton;