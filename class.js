'use strict';
// Object-oriented programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance


// 1. Class declarations
class Person {
  // constructor 생성자(object를 만들때 필요한 data 전달)
  constructor(name, age) {
    // fields (전달받은 데이터를 fields에 할당)
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

// object 생성 (new)
const ellie = new Person('ellie', 20);
console.log(ellie.name); // ellie
console.log(ellie.age); // 20
ellie.speak(); // ellie: hello!

// this -> 생성된 object


// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }

  set age(value) { // set은 값을 설정하므로 value를 받아온다
    // if (value < 0) {
    //   throw Error('age can not be negative');
    // }
    // this._age = value;
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Jobs', -1);
console.log(user1.age);


// 3. Fields (public, private)
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference (JS MDN reference page)
/*
constructor 생성자를 쓰지않고 field를 정의할 수 있다
그냥 정의하면 public(외부에서 접근 가능), # 붙이면 
private (클래스 내부에서만 값이 보여지고, 접근되고, 값이 변경 가능하지만
클래스 외부에서는 값을 읽을수도 변경할수도 없다)
*/

class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined


// 4. Static properties and methods
// Too soon!

/* 
클래스 안의 fields와 method들은 새로운 object를 만들때마다
그대로 복제되어서 값만 우리가 지정된 값으로 변경이 되어서 만들어지는데
간혹 이런 object에, data에 상관없이 class가 가지고 있는 고유한 값과
이런 data에 상관없이 동일하게 반복적으로 사용되어지는 method가 있을 수 있는데
그런 애들을 static 키워드 이용해서 붙이면 object 상관없이 클래스 자체에 연결되어있다
*/

class Article {
  static publisher = 'Dream Coding';
  constructor(articleNumber){
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
// static은 object마다 할당되는 것이 아닌 class 자체에 붙어있다
console.log(Article.publisher); // Dream Coding
// static 함수 호출할 때도 class 이름을 이용해서 호출한다
Article.printPublisher(); // Dream Coding
// console.log(article2.articleNumber)

/* object에 상관없이, 들어오는 데이터에 상관없이 공통적으로 class에서 쓸 수 있는 거라면
static과 static method를 사용해서 작성하는 것이 메모리의 사용량을 줄여줄 수 있다.
*/


// 5. Inheritance
// a way for one class to extend another class.
class Shape {
  constructor(width, height, color) { // fields
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() { // method
    console.log(`drawing ${this.color} color of`);
  }

  getArea() { // method
    return this.width * this.height;
  }
}

// extends 키워드를 이용해서 shape을 연장할 수 있다
class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw(); // 공통적으로 정의한 draw도 그리고 싶다. 부모의 메서드도 호출하고 싶을 땐 super
    console.log('✨') // window + . 우리가 재정의한 메서드
  }
  getArea() {
    return (this.width * this.height) / 2; // 필요한 함수만 재정의해서 쓸 수 있다(오버라이딩)
  }

  toString() { // Object의 toString 함수 오버라이딩할 수 있다
    return `Triangle: color: ${this.color}`
  }
}

// shape에서 정의한 field와 method가 자동으로 rectangle에 포함된다
// 상속 -> 공통된 것들을 일일이 작성하지 않아도 extends 이용해서 재사용 가능!
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());


// 6. Class checking: instanceOf
// object는 class를 이용해서 만들어진 새로운 instance 
// instanceOf: 왼쪽에 있는 object가 오른쪽에 있는 class의 instance인지아닌지
// 이 object가 이 class를 이용해서 만들어진 아이인지 아닌지 -> t/f 리턴
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true -> 우리가 JS에서 만든 모든 object클래스들은 JS Object를 상속한 것!
console.log(triangle.toString()); // 어떤 object든지 공통적으로 존재하는 메서드를 쓸 수 있다는 것!


// class: 조금더 연관있는 데이터를 한데 묶어놓는 컨테이너 같은 아이
// class => fields + methods
// fields만 들어있는 경우 => data class 라 부른다
// class person{
//   name; // 속성 (field)
//   age; // 속성 (field)
//   speak(); // 행동 (method)
// }

// class (붕어빵을 만들 수 있는 틀)
// - template (청사진, 템플릿)
// - declare once (한번만 선언)
// - no data in (클래스 자체에는 data 들어있지않고, 틀만 템플릿만 정의해놓음)

// object (클래스를 이용해서 실제로 데이터 넣어서 만드는 것, 팥붕어빵, 슈크림붕어빵)
// - instance of a class (클래스를 이용해 새로운 인스턴스 생성)
// - creaed many times
// - data in
// (클래스는 정의만 한 것이라서 실제로 메모리에 올라가진 않지만
//   실제로 데이터를 넣으면 object는 메모리에도 올라간다)