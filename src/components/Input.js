import React from "react";

function Input(props) {
  const changeHandler = props.onChange;

  return <input type="text" onChange={changeHandler}/>;
}
export default Input;
