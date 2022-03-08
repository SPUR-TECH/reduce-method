
/**
 * To run this file in Gitpod, use the 
 * command node reduce.js in the terminal
 */


// Summing an array of numbers:
// const nums = [1, 2, 3, 4];
// let sum = nums.reduce((acc, cur) => acc + cur, 0 );
//   console.log(sum);

// const nums2 = [1, 2, 3, 4];
// let sum2 = nums2.reduce((acc, cur) => {
//   console.log(
//     "accumulator:", acc,
//     "current:", cur,
//     "total:", acc + cur
//   );
//   return acc + cur;
// }, 100); // Start the sum from chosen number:
// console.log(sum2);


const teamMembers = [
  {
    name: 'Andrew',
    profession: 'Developer',
    yrsExperience: 5
  },
  {
    name: 'Ariel',
    profession: 'Developer',
    yrsExperience: 7
  },
  {
    name: 'Michael',
    profession: 'Designer',
    yrsExperience: 1
  },
  {
    name: 'Kelly',
    profession: 'Designer',
    yrsExperience: 3
  }
];

// Totaling a specific object property
let totalExperience = teamMembers.reduce((acc, cur) => acc + cur.yrsExperience, 0);
console.log(totalExperience);

// Grouping by a property, and totaling it too
let experienceByProfession = teamMembers.reduce((acc, cur) => {
  let key = cur.profession;
  if (!acc[key]) {
    acc[key] = cur.yrsExperience;
  } else {
    acc[key] += cur.yrsExperience;
  }
  return acc;

}, {});
console.log(experienceByProfession);
