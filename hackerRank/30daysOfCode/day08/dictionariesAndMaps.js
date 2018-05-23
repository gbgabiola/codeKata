function processData(input) {
    //Enter your code here
input = input.split('\n')
    var N = parseInt(input[0])

    var phonebook = []
    for (var k = 0; k< N; k++){
        var line = input[k+1]
        line = line.split(' ')
        phonebook[line[0]] = line[1]
    }

    for (var k = N+1; k < input.length; k++ ){
        var num = (phonebook[input[k]])
        if (num !== undefined){
            console.log(input[k]+'='+num)
        } else {
            console.log('Not found')
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});