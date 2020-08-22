//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const TRANSCRIPTION = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

// Using destructuring
export const toRna = dna => [...dna].map(necleotide => TRANSCRIPTION[necleotide]).join('');

// const toRna = dna => dna.split('').map(necleotide => TRANSCRIPTION[necleotide]).join('');

// Using RegExp and replace method
// const toRna = dna => dna.replace(/./g, necleotide => TRANSCRIPTION[necleotide]);
