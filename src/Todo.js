import React from "react";
import { connect } from "react-redux";
const Todo = (props) => {
  return (
    <li
      onClick={() => props.dispatch({ type: "TOGGLE_TODO", id: props.id })}
      style={
        props.complete ? { textDecoration: "line-through", color: "grey" } : {}
      }
    >
      {props.name}
    </li>
  );
};
export default connect()(Todo);
