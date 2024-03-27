//FIRST ATTEMPT

// const table = document.getElementById('sampletable')

// function insertRow(){
//   let newRow = document.createElement('tr')
//   // let newRowNode = document.createTextNode('Row 3')
//   // newRow.appendChild(newRowNode)

//   console.log(newRow);
// }

// insertRow()

//solution 


function insertRow(){
  const table = document.getElementById('sampleTable') //get elemenet goes in function
  let newRow = document.createElement('tr') //creates one tr
  for(let i =0; i<2; i++){ //creats two td for each tr
  let data = document.createElement('td')
  let contentData = document.createTextNode('New Row')
  data.appendChild(contentData)
  newRow.appendChild(data)
  table.appendChild(newRow)
  }
}