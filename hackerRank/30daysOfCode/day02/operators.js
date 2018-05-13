process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

var tipCost = mealCost * tipPercent / 100;
var taxCost = mealCost * taxPercent / 100;
var totalCost = Math.round(mealCost + tipCost + taxCost);

console.log("The total meal cost is " + totalCost + " dollars.");
