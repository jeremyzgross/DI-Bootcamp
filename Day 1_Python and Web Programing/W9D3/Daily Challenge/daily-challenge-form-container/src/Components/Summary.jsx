import React from 'react';

const Summary = (props) => {
  const { firstname, lastname, age, gender, destination, dietaryRestrictions } = props.formData;

  return (
    <>
      <h2>Entered information:</h2>
      <p>Your name: {firstname} {lastname}</p>
      <p>Your age: {age}</p>
      <p>Your gender: {gender}</p>
      <p>Your destination: {destination}</p>
      <p>Your dietary restrictions:</p>
      <span>**Nuts free : {dietaryRestrictions.nuts ? 'Yes' : 'No'}</span><br />
      <span>**Lactose free : {dietaryRestrictions.lactose ? 'Yes' : 'No'}</span><br />
      <span>**Vegan meal : {dietaryRestrictions.vegan ? 'Yes' : 'No'}</span>
    </>
  );
};

export default Summary;