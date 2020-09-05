/**
 * Requirements:
 *
 * Given an array "people", write:
 * 1. A function "listByGender" that accepts "gender" and retruns an array of people that falls under the given gender; and
 * 2. A function "groupByDepartment" that returns people grouped by their department.
 *
 * Write your solution without using any libraries and use ES6 or above as much as possible.
 */

const people = [
  {
    name: 'Arisa',
    department: 'BP',
    gender: 'F'
  },
  {
    name: 'Ham',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Alice',
    department: 'IT',
    gender: 'F'
  },
  {
    name: 'Anna',
    department: 'DA',
    gender: 'F'
  },
  {
    name: 'Larry',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Ria',
    department: 'Sales',
    gender: 'F'
  },
  {
    name: 'JD',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Thor',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Karl',
    department: 'Sales',
    gender: 'M'
  },
  {
    name: 'Rachel',
    department: 'Sales',
    gender: 'F'
  }
];

function listByGender(gender) {
  return people.filter(person => person.gender === gender).map(person => person.name);
}

function groupByDepartment() {
  return people.reduce((result, current) => {
    (result[current.department] = result[current.department] || []).push(current);
    return result;
  }, {});
}

// Test:
listByGender('M'); // Output: Includes Larry, JD, Thor, and Karl
listByGender('F'); // Output: Includes Arisa, Ham, Alice, Anna, Ria, and Rachel
groupByDepartment(); // Output: People grouped by their department