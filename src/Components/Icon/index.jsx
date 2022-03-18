import icons from "./../../Assets/sprite.svg";
import "./index.scss";
import React from "react";

const Icon = ({name, color, size}) => {
  return (
    <svg className={"icon"} fill={color ? color : "currentColor"} width={size ? size : "2rem"} height={size ? size : "2rem"}>
      <use href={icons + `#${name}`}/>
    </svg>
  )
}

export default Icon;