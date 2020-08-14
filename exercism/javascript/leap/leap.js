//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = year => year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;

// Using Date Object
// export const isLeap = year => new Date(year, 1, 29).getDate() === 29;
