class Student extends Person {
  /*	
   *   Class Constructor
   *   
   *   @param firstName - A string denoting the Person's first name.
   *   @param lastName - A string denoting the Person's last name.
   *   @param id - An integer denoting the Person's ID number.
   *   @param scores - An array of integers denoting the Person's test scores.
   */
  // Write your constructor here
  constructor(firstName, lastName, id, scores) {
    super(firstName, lastName, id);
    this.scores = scores;
  }
  /*	
   *   Method Name: calculate
   *   @return A character denoting the grade.
   */
  // Write your method here
  calculate() {
    // const avg = this.scores.reduce((total, num) => total + num, 0) / this.scores.length;


    // let total = 0;
    // for (let i = 0; i < this.scores.length; i++) {
    //   total += this.scores[i]
    // }
    // const avg = (total / this.scores.length);


    // const sum = this.scores.reduce(function (sum, num) {
    //   return sum + num;
    // });
    const sum = this.scores.reduce((sum, num) => sum + num);

    const avg = Math.ceil(sum / this.scores.length);
    if (avg <= 100 && avg >= 90) return 'O';
    if (avg < 90 && avg >= 80) return 'E';
    if (avg < 80 && avg >= 70) return 'A';
    if (avg < 70 && avg >= 55) return 'P';
    if (avg < 55 && avg >= 40) return 'D';
    return 'T';
  }
}