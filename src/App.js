import React, { Component } from "react";
import { connect } from "react-redux";
import { numberAction } from "./actions/index";
import { bindActionCreators } from "redux";



class App extends Component {

  componentDidMount() {
    // this.props.plus()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        Number: {this.props.number}<hr />
        <button onClick={() => this.props.plus("PLUS")}>PLUS</button>
        <button onClick={() => this.props.minus("MINUS")}>MINUS</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state.number;
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    plus: numberAction,
    minus: numberAction
  }, dispatch);

  // return {
  //   plus: (p) => dispatch(numberAction(p)),
  //   minus: (p) => dispatch(numberAction(p))
  // }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);