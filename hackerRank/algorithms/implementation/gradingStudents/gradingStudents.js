'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the gradingStudents function below.
 */
function gradingStudents(grades) {
    /*
     * Write your code here.
     */
    if(grades) {
    var grade;
    for (var i = 0; i < grades.length; i++) {
      console.log(grades[i] < 38 || grades[i] % 5 < 3 ? grades[i] : grades[i] + (5 - (grades[i] % 5)));
    }
  }
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
      grades[grades_i] = parseInt(readLine());
    }
    var result = gradingStudents(grades);
    console.log(result.join("\n"));
}