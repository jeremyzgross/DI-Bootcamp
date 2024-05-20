"use strict";
const processInput = (input) => {
    if (typeof input === 'number') {
        return `it's a square`;
    }
    else if (typeof input === `string`) {
        return input.toUpperCase();
    }
    else if (typeof input === `boolean`) {
        return !input;
    }
    else {
        return ``;
    }
};
console.log('test');
console.log(processInput(true));
