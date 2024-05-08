import { useState } from "react";

const Form = (props) => {
  const [inputs, setInputs] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  const handleInputs = (e) => {
    const {value, checked, type, name} = e.target
    const inputValue = type ==='checkbox' ? checked : value ;
    setInputs({...inputs, [name]: inputValue})


  };

  return (
    <>
      <h2>From</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => handleInputs(e)}
          placeholder='Name...'
          name = "name"
        />
        <br />
        <input
          onChange={(e) => handleInputs(e)}
          type='email'
          placeholder='Email...'
          name = "email"
        />
        <br />
        <select name= "numselector"onChange={(e) => handleInputs(e)}>
          <option name='num' value={1}>One</option>
          <option name='num' value={2}>Two</option>
          <option name='num' value={3}>Three</option>
        </select>
        <br />
        Yes/No{" "}
        <input
          // checked={yesno}
          onChange={(e) => handleInputs(e)}
          type='checkbox'
          name = "yesno"
        />
        <br />
        <input type='submit' value='Submit' />
      </form>
    </>
  );
};
export default Form;