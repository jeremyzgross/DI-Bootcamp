import React from 'react';


class ErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError = (error) =>{
    return {
      hasError: true
    }
  } //changing the state

  componentDidCatch = (error, errorInfo) => {
    console.log(error, errorInfo);
    this.setState({ hasError: true });
  };

  render() {
    if (this.state.hasError) return <h2>Something went wrong!</h2>;
    return this.props.children; //to see the counter which will be a child
  }
}

export default ErrorBoundary;
