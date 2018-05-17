function processData(input) {
    //Enter your code here
    var phoneBook = [], element = {};
	//Split the input
    input = input.split("\n");
    
    
    for (i = 1; i < input.length; i++) {
        var arr = input[i].split(" ");
        
        if(arr.length == 1) {
            var  callbackPhoneBook = function(element) {
                if(element.name === arr[0]) {
                    console.log(element.name +"=" +element.tel); 
                    return true;
                } else { 
                	return false; 
             	}                  
            };
            
            if( !phoneBook.find(callbackPhoneBook)) {
            	console.log("Not found"); 
            }
        } else if (arr.length == 2) { 
        	phoneBook.push({name : arr[0], tel : arr[1]}); 
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