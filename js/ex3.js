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

const female = student => student.sex === "f";
const average = array =>
  array.reduce((sum, value) => sum + value, 0) / array.length;

// Filter by last name starting with C, first and last name, min, max, and avg score
console.log(
  students.filter(female).map(student => {
    return {
      name: student.name,
      avgGrade: average(student.grades)
    };
  })
);