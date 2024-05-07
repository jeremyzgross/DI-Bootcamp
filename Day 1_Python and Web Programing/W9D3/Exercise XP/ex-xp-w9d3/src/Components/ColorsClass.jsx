import React from 'react';

class ColorClass extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      favcolor: 'red'
    }
  }
    componentDidMount() {
    setTimeout(() => {
      this.setState({ favcolor: 'yellow' });
    }, 2000);
  }
    componentDidUpdate(prevProps, prevState){
    if (prevState.favcolor !== this.state.favcolor) {
      console.log("after update");
    }
  }
  
  shouldComponentUpdate(nextProps, nextState){
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("in getSnapshotBeforeUpdate");
        return null 
  }

  changeColor = ()=>{
    this.setState({favcolor:'blue'})
  }



  render(){
    return <>   
      <h1>My favorite color is {this.state.favcolor}</h1>
      <button onClick={this.changeColor}>Change Fav Color</button>
    </>
  }

}

export default ColorClass