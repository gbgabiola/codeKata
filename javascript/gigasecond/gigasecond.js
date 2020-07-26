//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = date => new Date(date.getTime() + 1e12);

/*
export const gigasecond = date => {
  const time = date.getTime();
  return new Date(time + (1000000000 * 1000)); // or 1000000000000 or use Math.pow(10, 12) or 10**12 or 1e12
}; */
