function processData(input) {
    //Enter your code here
    const words = input.split('\n').slice(1);
    words.forEach( word => {
        let evenLetters = '';
        let oddLetters = '';
        for(let i=0; i<word.length; i++){
            i%2===0 ? evenLetters+=word[i] : oddLetters+=word[i];
        }
        console.log(evenLetters, oddLetters);
    });
}