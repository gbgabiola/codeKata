const position = letter => `Position of alphabet: ${'abcdefghijklmnopqrstuvwxyz'.indexOf(letter) + 1}`;

// Test Case
position('a'); // Position of alphabet: 1
position('z'); // Position of alphabet: 26
position('e'); // Position of alphabet: 5
