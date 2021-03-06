// Q1. make a string out of an array
// join
{
  const fruits = ['apple', 'banana', 'orange'];
  const result = fruits.join(', ');
  console.log(result);
}

// Q2. make an array out of a string
// split
{
  const fruits = 'π, π₯, π, π';
  const result = fruits.split(',');
  // const result = fruits.split(',', 2);
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
// reverse
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // λ°°μ΄ μμ²΄μ μμκ° λ°λμλ€
}


// Q4. make new array without the first two elements
// splice and slice
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // λ°°μ΄μ νΉμ ν λΆλΆμ λ¦¬ν΄νλ slice
  console.log(result); // [3, 4, 5] -> λ°°μ΄μμ μνλ λΆλΆλ§ λ¦¬ν΄ν΄μ λ°μμ€κ³  μΆμ λ
  console.log(array); // [1, 2, 3, 4, 5]
  // const result = array.splice(0, 2);
  // console.log(result); // [1, 2] -> μ­μ λ κ°λ€ λ°ν
  // console.log(array); // [3, 4, 5] -> array (λ°°μ΄) μμ²΄λ₯Ό λ³ννλ κ²
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
// find
{
  // const result = students.find(function (student, index) {
  //   console.log(student, index);
  // });

  // const result = students.find(function(student, index) {
  //   return student.score === 90;
  // });
  
  // const result = students.find(function (student, index) {
  //   console.log(student, index);
  //   return student.score === 90;
  // });

  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
// filter
{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
// map -> λ°°μ΄ μμ λ€μ΄μλ μμ νκ°μ§νκ°μ§λ₯Ό λ€λ₯Έκ²μΌλ‘ λ³νν΄μ£Όλ κ²! (μλ‘μ΄ λ°°μ΄ λ¦¬ν΄)
// mapμ μ§μ λ μ½λ°±ν¨μλ₯Ό νΈμΆνλ©΄μ κ°κ°μ μμλ€μ ν¨μλ₯Ό κ±°μ³μ μλ‘μ΄ κ°μΌλ‘ λ³ννλ€. μ½λ°±ν¨μκ° μ΄λ€ μΌμ νλλμ λ°λΌ μμλ€μ΄ λ€λ₯Έ κ°μΌλ‘ λ§€νλμ΄ λ§λ€μ΄μ§λ€. (ex. κ³±νκΈ°2)
// {
//   const result = students.map((student) => student);
//   console.log(result)
// }
// λ°°μ΄ μμ λ€μ΄μλ λͺ¨λ  μμλ€μ μ°λ¦¬κ° μ λ¬ν΄μ€ μ½λ°±ν¨μλ‘ νΈμΆνλ©΄μ
// μ½λ°±ν¨μμμ κ°κ³΅λμ΄μ§, λ¦¬ν΄λμ΄μ§ κ°λ€λ‘ λμ²΄νλ κ²!
// λ°°μ΄ μμ λ€μ΄μλ μμλ€μ μ°λ¦¬κ° μνλ ν¨μλ₯Ό μ΄μ©ν΄ λ€λ₯Έ λ°©μμ λ°μ΄ν° λ§λ€κ³  μΆμ λ mapμ΄ μ μ©ν¨!
{
  const result = students.map((student) => student.score);
  console.log(result)
}

// Q8. check if there is a student with the score lower than 50
// some and every
{
  // console.clear();
  const result = students.some((student) => student.score < 50);
  console.log(result);

  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2)
  console.log(!true);
}

// Q9. compute students' average score
// reduce
// reduceRight : λ°°μ΄μ μ μΌ λ€μμλΆν° μμνλ κ²(μμκ° κ±°κΎΈλ‘ νΈμΆλμ΄μ§)
// reduce : λ°°μ΄ νλνλλ₯Ό λλ©΄μ λ¬΄μΈκ° κ°μ λμ ν  λ μ΄λ€
// prev: μ΄μ μ μ½λ°±ν¨μμμ λ¦¬ν΄λ κ°μ΄ μ λ¬λλ€
// curr: λ°°μ΄μ μμ΄νμ μμ°¨μ μΌλ‘ μ λ¬λ°λλ€
{
  // console.clear();
  // const result = students.reduce((prev, curr) => {
  //   console.log('-----------');
  //   console.log(prev);
  //   console.log(curr);
  //   return prev + curr.score;
  // }, 0);
  const result = students.reduce((prev, curr) => prev + curr.score, 0);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
// map, join
{
  const result = students.map((student) => student.score).filter(score => score >= 50).join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
// sort
{
  const result = students.map(student => student.score).sort((a, b) => a - b).join();
  console.log(result); 
}