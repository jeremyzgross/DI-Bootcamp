
import React from 'react';

class Show extends React.Component{
  componentWillUnmount(){
    console.warn('The component named Header is about to be unmounted. Bye Bye!')
  }
  render() {
    return <h1>Show Component</h1>;
  }
}

export default Show

