const addLength = str => str.split(' ').map(word => `${word} ${word.length}`);

addLength('apple ban'); // ["apple 5", "ban 3"]
addLength('you will win'); // ["you 3", "will 4", "win 3"]
