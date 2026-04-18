const classList = [
  { name: "Amara", score: 88 },
  { name: "Tinuke", score: 62 },
  { name: "Habeeb", score: 45 }
];


function gradeScore(score) {
  if (score >= 70 && score <= 100) return "A";
  else if (score >= 60) return "B";
  else if (score >= 50) return "C";
  else if (score >= 40) return "D";
  else return "F";
}

function summarizeStudent(students) {
  return students.map(student => {
    return `${student.name} scored ${student.score} — Grade: ${gradeScore(student.score)}`;
  });
}



console.log(summarizeStudent(classList));
