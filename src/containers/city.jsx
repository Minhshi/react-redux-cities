import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setActiveCity } from "../actions";

class City extends React.Component {
  handleClick = () => {
    this.props.setActiveCity(this.props.city);
  };

  render() {
    return (
      <div className="city" onClick={this.handleClick}>
        {this.props.city.name}
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setActiveCity: setActiveCity }, dispatch);
}

// function mapStateToProps(state) {
//   return {
//     activeCity: state.activeCity
//   };
// }

export default connect(
  null,
  mapDispatchToProps
)(City);
