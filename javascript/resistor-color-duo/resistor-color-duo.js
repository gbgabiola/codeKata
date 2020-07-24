//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COLORS = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
};

export const decodedValue = (colors) => Number(colors.slice(0, 2).map(color => COLORS[color]).join(''));

// const COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
// export const decodedValue = colors => COLORS.indexOf(colors[0]) * 10 + COLORS.indexOf(colors[1]);


/* Importing resistor-color
import { colorCode } from '../resistor-color/resistor-color';
export const decodedValue = ([color1, color2]) => colorCode(color1) * 10 + colorCode(color2);
*/
