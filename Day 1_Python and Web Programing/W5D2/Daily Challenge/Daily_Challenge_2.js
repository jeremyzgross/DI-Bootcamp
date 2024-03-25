/*
*  
* *  
* * *  
* * * *  
* * * * *
* * * * * *
*/

let test = 'test'
console.log(test);

star1 = '*'
console.log('*') //could not firgure out how to print the first line star in the loop
for (let index = 0; index < 5; index++){
    star1 += '*';
    console.log(star1);
}

star2 = '*' 
console.log('*') //could not firgure out how to print the first line star in the loop
for (let index = 0; index < 1; index++){
    star2 += '*';
    console.log(star2);
    for (let index = 0; index < 1; index++){
        star2 += '*';
        console.log(star2);
        for (let index = 0; index < 1; index++){
            star2 += '*';
            console.log(star2);
            for (let index = 0; index < 1; index++){
                star2 += '*';
                console.log(star2);
                for (let index = 0; index < 1; index++){
                    star2 += '*';
                    console.log(star2);
                }
            }
        }
    }
}