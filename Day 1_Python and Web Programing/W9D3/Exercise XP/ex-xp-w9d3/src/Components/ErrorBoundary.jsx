import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }
  static getDerivedStateFromError = (error) =>{
    return {
      hasError: true
    }
  }

  componentDidCatch = (error, errorInfo) => {
    console.log(error, errorInfo);
    this.setState({ 
      hasError: true,
      error: error,
      errorInfo: errorInfo
    });
  };

render() {
  if (this.state.hasError) {
    return (
      <details style={{ whiteSpace: 'pre-wrap' }}>
        {this.state.error && this.state.error.toString()}
        <br />
        {this.state.errorInfo && this.state.errorInfo.componentStack}
      </details>
    );
  }
  return this.props.children;
}
}

export default ErrorBoundary;
