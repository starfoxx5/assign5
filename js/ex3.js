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


const Cname = studentList => studentList.lastName[0] === "C";
const avg = array =>
  array.reduce((sum, value) => sum + value, 0) / array.length;
//const maxSC = () => (studentList.scores).reduce((min, currentValue) => Math.min(min, currentValue), array[0]);
// const maxSC = () => udent.grades.reduce((max, score) => Math.max(max, score), -99)
const returnMax = (x, y) => (x > y) ? x : y;
const minSC = array => Math.min(studentList.scores);

//prof way of doing max
const maxxScores = studentList.map(student => student.scores)
    .map(scoresArray =>{
      return{
        maxVal: scoresArray.reduce((max, element) => Math.max(max, element), -99)
      }
    });


// Filter by last name starting with C, first and last name, min, max, and avg score
console.log(
  studentList.filter(Cname).map(studentList => {
    return {
      Lname: studentList.lastName,
      Fname: studentList.firstName,
      //maxScore: maxSC(studentList.scores),
      maxScore: student.grades.reduce((max, score) => returnMax(max, score), -99),
      minScore: minSC(studentList.scores),
      avgGrade: avg(studentList.scores)
    };
  })
);