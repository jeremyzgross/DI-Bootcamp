import React, { useState } from 'react'

const Voting = () => {
  //languages or setlanguages becomes the array of objects depending on what is being used (aka which state)
  const [languages, setLanguages] = useState([
    { name: 'Php', votes: 0 },
    { name: 'Python', votes: 0 },
    { name: 'JavaScript', votes: 0 },
    { name: 'Java', votes: 0 },
  ])

  //you have to use the spread operator to get all the info in array of objects
  const increaseVote = (index) => {
    const updatedLanguages = [...languages] //get's the array of objects from languages into updatedLanguages
    // console.log(updatedLanguages)
    console.log(index)
    updatedLanguages[index].votes += 1 //index is each object in the array of object. Then we are accessing the votes key
    setLanguages(updatedLanguages) //the array of objects with the +1 is now passed into setLanguages
  }

  return (
    //each object in the array gets an index number, then each name and votes is pulled out and displayed on the dom. when teh button is clicked it calles increaseVote and passes the index that was given for each object duruing the map
    <div>
      {languages.map((language, index) => (
        <div key={index}>
          <p>{language.name}</p>
          <p>{language.votes}</p>
          {/* Pass index to increaseVote function */}
          <button onClick={() => increaseVote(index)}>Click Here</button>
        </div>
      ))}
    </div>
  )
}

export default Voting
