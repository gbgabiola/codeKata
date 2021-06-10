/*
function stringClean(s) {
  return s.replace(/[^~#$%^&!@*():;"'.,?a-zA-Z ]/g, '');
}
*/

// Short Solution
const stringClean = s => s.replace(/\d/g, ''); // or using /[0-9]/
