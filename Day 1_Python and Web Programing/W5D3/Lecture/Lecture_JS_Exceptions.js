// console.log(notDefinedVariable);
// console.log('continue the code');

//when javascript sees an error, it will crash the program. So we will not log line 2. We can avoid this with 'Try and Catch'

// let notDefinedVariable //here should be an error by itself
// try{
//     console.log(notDefinedVariable); //try allows it to not error
// } catch (error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// }

// console.log('continue the code'); //this code will execute


//finally operator

// let notDefinedVariable 
// try{
//     console.log(notDefinedVariable); //try allows it to not error
// } catch (error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally{ //this will happen always not related to try or catch
//     console.log('fianlly block');
// }

// console.log('continue the code');

//logs finally block and continue the code 

//throw operator (similar to raise in python)


function division(a,b){
    let results = a/b 
    return results
}
console.log(division(15, 0)); //results in infinity so we write a throw in the function:


function division(a,b){
    if (b === 0){
        throw new Error('Cannot divide by zero')
    } else{
        let results = a/b 
        return results
}
}
console.log(division(15, 0)) //will show your error

