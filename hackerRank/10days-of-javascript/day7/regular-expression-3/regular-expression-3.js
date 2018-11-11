function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match ALL occurrences of numbers in a string.
   */
  const re = RegExp('\\d+', 'g');
  // const re = new RegExp(/\d+/g);

  /*
   * Do not remove the return statement
   */
  return re;
}

// const regexVar = () => /\d+/g;