let sentence = 'The movie is not that bad, I like it'
console.log(sentence);
let wordNot = sentence.indexOf("not")
console.log(wordNot);
let wordBad = sentence.indexOf("bad")
console.log(wordBad);

//13,22
let sentenceArray = sentence.split('')
console.log(sentenceArray);
sentenceArray.splice(13,23, 'good, I like it')
console.log(sentenceArray)
sentence = sentenceArray.join('')
console.log(sentence);


