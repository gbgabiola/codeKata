function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  const re = RegExp(/^([aeiou]).*\1$/);
  // const re = new RegExp("(^a.+a$)|(^e.+e$)|(^i.+i$)|(^o.+o$)|(^u.+u$)");
  /*
   * Do not remove the return statement
   */
  return re;
}


// const regexVar = () => /^(a|e|i|o|u).*\1$/g;