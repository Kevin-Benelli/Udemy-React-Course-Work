import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  } //error is automatically passed in to componentDidCatch()

  render() {
    if (this.state.hasError) {
      return <p>Something Went Wrong!</p>;
    }
    return this.props.children; // because we wrap the errorboundary around jsx components that might throw errors
  }
}

export default ErrorBoundary;
