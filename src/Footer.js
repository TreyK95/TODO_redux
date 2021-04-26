import React from "react";
import { connect } from "react-redux";

const Footer = (props) => {
  const setFilter = (filter) => {
    props.dispatch({ type: "SET_FILTER", filter: filter });
  };

  const getStyle = (filter) => {
    if (props.filter === filter) {
      return { border: "3px solid" };
    } else {
      return {};
    }
  };
  return (
    <div>
      <div style={getStyle("All")} onClick={() => setFilter("All")}>
        All
      </div>
      <div style={getStyle("Completed")} onClick={() => setFilter("Completed")}>
        Completed
      </div>
      <div
        style={getStyle("Incomplete")}
        onClick={() => setFilter("Incomplete")}
      >
        Incomplete
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { filter: state.filter };
};

export default connect(mapStateToProps)(Footer);
