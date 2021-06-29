/*
// Solution 1:
function partlist(arr) {
  return Array.apply(null, { length: arr.length - 1} ).map((_, i) => [arr.slice(0, i + 1).join(' '), arr.slice(i + 1, arr.length).join(' ')]);
}
*/

// Solution 2:
const partlist = arr => arr.map((_, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1);

partlist(['I', 'wish', 'I', "hadn't", 'come']); // [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
partlist(['cdIw', 'tzIy', 'xDu', 'rThG']); // [["cdIw", "tzIy xDu rThG"], ["cdIw tzIy", "xDu rThG"], ["cdIw tzIy xDu", "rThG"]])
partlist(['vJQ', 'anj', 'mQDq', 'sOZ']); // [["vJQ", "anj mQDq sOZ"], ["vJQ anj", "mQDq sOZ"], ["vJQ anj mQDq", "sOZ"]])
