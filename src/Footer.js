import React from "react";
import { connect } from "react-redux";

const Footer = (props) => {
  const setFilter = (filter) => {
    props.dispatch({ type: "SET_FILTER", filter: filter });
  };
  return (
    <div>
      <div onClick={() => setFilter("all")}>All</div>
      <div onClick={() => setFilter("completed")}>completed</div>
      <div onClick={() => setFilter("incomplete")}>incomplete</div>
    </div>
  );
};

export default connect()(Footer);
