import Test from './test';
const Parent = (props) =>{
  console.log(props);
  // return (
  //   <h2>Parent</h2>
  // )
  if(props.auth === 'admin'){
      return props.children
  }else{
    return <Test/>
  }
}

export default Parent