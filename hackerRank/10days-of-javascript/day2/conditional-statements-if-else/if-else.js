// Using ternary operator
function getGrade(score) {
  let grade;
  // Write your code here
  grade = (score > 25 && score <= 30) ? 'A' :
    (score > 20 && score <= 25) ? 'B' :
    (score > 15 && score <= 20) ? 'C' :
    (score > 10 && score <= 15) ? 'D' :
    (score > 5 && score <= 10) ? 'E' :
    (score >= 0 && score <= 5) ? 'F' : 0;

  return grade;
}


/*
function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25 && score <= 30) {
    return 'A';
  } else if (score > 20 && score <= 25) {
    return 'B';
  } else if (score > 15 && score <= 20) {
    return 'C';
  } else if (score > 10 && score <= 15) {
    return 'D';
  } else if (score > 5 && score <= 10) {
    return 'E';
  } else if (score >= 0 && score <= 5) {
    return 'F';
  }

  return grade;
}
*/