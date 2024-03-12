import React from "react";

class Clock extends React.Component {
  constructor(props) {
    // console.log("constructor");
    super(props);
    this.state = {
      date: new Date().toLocaleTimeString(),
    };
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log("shouldComponentUpdate");
    if (this.state.date !== nextState.date) {
      return true;
    }
    return false;
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    // console.log("componentDidUpdate");
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      // console.log('componentDidMount');
      this.setState({ date: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
    clearInterval(this.interval);
  }

  render() {
    // console.log("render");
    return (
      <>
        <div>
          <h2>It is {this.state.date}.</h2>
        </div>
      </>
    );
  }
}

export default Clock;
