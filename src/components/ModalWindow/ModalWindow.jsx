import React from "react";
import "./ModalWindow.css";

const ModalWindow = (props) => {
  return (
    <div
      className={props.active ? "modalWindow active" : "modalWindow"}
      onClick={() => props.setActive(false)}
    >
      <div
        className={props.active ? "modalContent active" : "modalContent"}
        onClick={(e) => e.stopPropagation()}
      >
        {props.children}
      </div>
    </div>
  );
};
export default ModalWindow;
