import React from "react";
import "../styles/app.css";

const ListKeyboard = (props) => {
  const listItems = props.text.length
    ? props.text.map(function (item, index) {
        return (
          <div
            className="component"
            key={new Date().getTime() + index}
            onClick={props.myClick}
          >
            {item}
          </div>
        );
      })
    : "";

  return <div className="components">{listItems}</div>;
};

export { ListKeyboard };
