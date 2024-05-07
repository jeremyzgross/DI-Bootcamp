import React from 'react';
import Show from './Show';

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  componentWillUnmount() {
    console.warn('The component named Child is about to be unmounted. Bye Bye!');
    // Add any cleanup or side effect code here if needed
  }

  changeToFalse = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        {this.state.show ? <h1>Hello World!</h1> : null}
        <button onClick={this.changeToFalse}>Delete Header</button>
      </>
    );
  }
}

export default Child;
