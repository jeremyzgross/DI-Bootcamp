//unmounting is unrendering of an element
//the unmount has to be in the return

const Test = (props) => {
  useEffect(() => {
    return () => alert('I will soon gone') //This is an unmount syntax. there needs to be a call back function at the end of an unmount. This will unmount
  }, [])
}

//multiple componenets
//grabbing a componenet with anotehr component


//error boundary
//errors must use a class componenet at this point, not a function componenet 