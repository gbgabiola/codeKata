function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let sum = 0;
    ar.forEach(element => {
        sum += element;
    });
    return sum;
}