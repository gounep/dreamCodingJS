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
  const fruits = '🍎, 🥝, 🍌, 🍒';
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
  console.log(array); // 배열 자체의 순서가 바뀌었다
}


// Q4. make new array without the first two elements
// splice and slice
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // 배열의 특정한 부분을 리턴하는 slice
  console.log(result); // [3, 4, 5] -> 배열에서 원하는 부분만 리턴해서 받아오고 싶을 때
  console.log(array); // [1, 2, 3, 4, 5]
  // const result = array.splice(0, 2);
  // console.log(result); // [1, 2] -> 삭제된 값들 반환
  // console.log(array); // [3, 4, 5] -> array (배열) 자체를 변형하는 것
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
// map -> 배열 안에 들어있는 요소 한가지한가지를 다른것으로 변환해주는 것! (새로운 배열 리턴)
// map은 지정된 콜백함수를 호출하면서 각각의 요소들을 함수를 거쳐서 새로운 값으로 변환한다. 콜백함수가 어떤 일을 하느냐에 따라 요소들이 다른 값으로 매핑되어 만들어진다. (ex. 곱하기2)
// {
//   const result = students.map((student) => student);
//   console.log(result)
// }
// 배열 안에 들어있는 모든 요소들을 우리가 전달해준 콜백함수로 호출하면서
// 콜백함수에서 가공되어진, 리턴되어진 값들로 대체하는 것!
// 배열 안에 들어있는 요소들을 우리가 원하는 함수를 이용해 다른 방식의 데이터 만들고 싶을 때 map이 유용함!
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
// reduceRight : 배열의 제일 뒤에서부터 시작하는 것(순서가 거꾸로 호출되어짐)
// reduce : 배열 하나하나를 돌면서 무언가 값을 누적할 때 쓴다
// prev: 이전의 콜백함수에서 리턴된 값이 전달된다
// curr: 배열의 아이템을 순차적으로 전달받는다
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