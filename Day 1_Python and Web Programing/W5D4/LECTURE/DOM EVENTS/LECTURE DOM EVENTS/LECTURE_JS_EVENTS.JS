//Event Listener

//add event listeners 

//1st retrieve the element where teh event will happen

let grandParent = document.querySelector('.grandparent') //period because class

let parent = document.querySelector('.parent')

let child = document.querySelector('.child')

//onclick event handler 

grandParent.onclick = function({
  console.log('grandpa was clicked');
})

//adding event listener

grandParent.addEventListener('click', e => {
  console.log(e);
}) //the DOM event then the callback function (using arrow function) 

//event handler

parent.onmouseover = function(){
  console.log('parent was hovered');
}

//capturing propagation (outside in)

grandParent.addEventListener('click', e => {
  console.log(e);
  e.stopPropagation //this method will stop propogation of element 
})

function grandparentResponsCLick(e){
  console.log('child is clicked');

}
//bubbling - a type of propagation (inside out)

grandParent.addEventListener('click', grandparentResponsCLick, True) //allows to captiure inside out as opposed to propagation which is outside in

