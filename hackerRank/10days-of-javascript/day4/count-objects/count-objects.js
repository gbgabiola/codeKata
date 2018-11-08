/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  // let count = 0;
  // for (let key in objects) {
  //   if (objects[key].x === objects[key].y) {
  //     count++;
  //   }
  // }
  // return count;

  let count = 0;
  objects.map(o => (o.x === o.y) ? count++ : null);
  return count;
}