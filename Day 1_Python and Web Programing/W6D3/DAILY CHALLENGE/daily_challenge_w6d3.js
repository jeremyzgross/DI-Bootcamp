//Creating Objects
/*
In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.
Create a class named Video. The class should be constructed with the following parameters:
title (a string)
uploader (a string, the person who uploaded it)
time (a number, the duration of the video - in seconds)
Create a method called watch() which displays a string as follows:
“uploader parameter watched all time parameter of title parameter!”
Instantiate a new Video instance and call the watch() method.
Instantiate a second Video instance with different values.
Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
Think of the best data structure to save this information within the array.
 */

class Video {
  constructor(title, uploader, time) {
    this.title = title
    this.uploader = uploader
    this.time = time
  }
  watch() {
    return `${this.uploader} watched all ${this.time} of ${this.title}`
  }
}

let aVideo = new Video('at the zoo', 'youtube founder', '12:00')
let anotherVideo = new Video('Video 1', 'Jeremy Gross', '3oclock')
console.log(aVideo.watch())

console.log(anotherVideo.watch())
