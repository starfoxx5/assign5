//Declare studentList Array
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];

//const female = student => student.sex === "f";
//const average = array =>
 // array.reduce((sum, value) => sum + value, 0) / array.length;

const Cname = studentList => studentList.lastName[0] === "C";
const avg = array =>
  array.reduce((sum, value) => sum + value, 0) / array.length;
const maxSC = array => Math.max(studentList.scores);
const minSC = array => Math.min(studentList.scores);

// Filter by last name starting with C, first and last name, min, max, and avg score
console.log(
  studentList.filter(Cname).map(studentList => {
    return {
      Lname: studentList.lastName,
      Fname: studentList.firstName,
      minScore: maxSC(studentList.scores),
      maxScore: minSC(studentList.scores),
      avgGrade: avg(studentList.scores)
    };
  })
);