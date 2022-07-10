/*
브라우저 위에서 동작하고 있는 웹사이트나 웹어플리케이션과 같은 client들이
어떻게 server와 통신할 수 있는지를 정의한 것이 HTTP(Hypertext Transfer Protocol)
http는 어떻게 hypertext를 주고받을수있는지를 규약한 프로토콜의 하나로,
client가 server에게 데이터를 request할 수 있고, server는 client가 요청한 것에 따라서
그에 맞는 response를 client에게 보낸다.

Hypertext -> 하이퍼링크, 전반적으로 쓰이는 리소스들(문서, 이미지 파일 등)을 모두 포함한다

http를 이용해서 서버에게 데이터를 요청해서 받아오는 방법으로는 AJAX를 쓴다
AJAX(Asynchronous JavaScript And XML)
웹페이지에서 동적으로 서버에게 데이터를 주고받을 수 있는 기술
예) XHR(XMLHttpRequest)
XHR 오브젝트 -> 브라우저 API에서 제공하는 오브젝트 중 하나로, 이 오브젝트를 이용하면 간단하게 서버에게 데이터를 요청하고 받아올 수 있다.
최근 브라우저API에 추가된 fetch() API를 이용하면 간편하게 데이터를 주고받을 수 있다.

XML -> HTML과 같은 마크업 언어 중 하나(태그들을 이용해 데이터를 나타냄)

브라우에서 server와 통신을 할 때는 fetch() API, XMLHttpRequest 를 사용할 수도 있는데,
XML은 불필요한 태그가 너무 많아서 파일 사이즈도 커지고 가독성도 좋지않아 많이 사용되지 않음
요즘은 json을 많이 사용한다!

JSON -> 요즘 많이 사용! JavaScript Object Notation (ECMAScript 3rd 1999) Object{key:value}
JSON은 브라우저뿐만 아니라 모바일에서 서버와 데이터를 주고받을때, 서버와 통신하지 않아도
object를 파일 시스템에 저장할 때도 많이 쓴다.
*/

/*
JSON
- simplest data interchange format
- lightweight text-based structure
- easy to read
- key-value pairs
- used for serialization and transmission of data between the network the network connection (데이터를 서버와 주고받을때 serialization(직렬화)할 때 쓴다)
- independent programming language and platform (언어나 플랫폼에 상관없이 쓸 수 있다!!)
*/

/* 
client -> object를 {key:value} str 타입으로 변환해서 전송 -> server 
client <- {key:value} str 타입으로 전송받아와서 object로 변환해서 브라우저에 표기 <- server
*/

/* 
JSON 공부 포인트
- object -> serialize(직렬화) -> json(string)으로 변환
- object로 변환 <- deserialize <- 직렬화된 json(string)
*/

// JSON
// JavaScript Object Notation

// 오버로딩(Overloading) : 함수의 이름은 동일하지만 어떤 parameter를 전달하냐, 몇개의 parameter를 전달하느냐에 따라 각각 다른 방식으로 호출이 가능한 것!

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true); // boolean타입의 primitive type도 json으로 변환 가능
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(), // Date object
  // symbol: Symbol("id"), // JS에 자체로 들어있는 symbol같은, JS에만 있는 특별한 data도 JSON에 포함되지 않는다!
  jump: () => {
    console.log(`${this.name} can jump!`); // 함수는 object에 있는 data가 아니므로 함수는 제외되어 출력된다!
  },
};

json = JSON.stringify(rabbit);
console.log(json);

// JSON으로 변환되는 것을 조금더 통제하고 싶다면 콜백함수를 이용하면 된다
// replacer -> 함수형태로 전달해도 되고, 배열형태로 전달해도 되는데
// 예를들어 배열에 원하는 property만 골라서 정의하면 해당하는 프로퍼티만 json으로 변환된다
json = JSON.stringify(rabbit, ['name', 'color', 'size']);
console.log(json); // {"name":"tori","color":"white","size":null}

/* 
또는 콜백함수로 좀더 세밀하게 통제도 가능하다.
key와 value를 전달받는 콜백함수를 전달하게 되면, key와 value에 따라 다양한 걸 해볼 수 있다
제일 처음으로 전달되는 것은 토끼의 object를 싸고 있는 제일 최상의 것이 전달되고,
key: , value: [object Object]
그 뒤부터 key와 value들이 전달된다.

그래서 만약 key가 name이라는 것이 들어오면 무조건 ellie라는 value로 설정하고
key가 name이 아니면 original value를 써야지, 라고 설정할 수 있다 -> 이름 변환되는 거 확인할 수 있다
그래서 세밀하게 통제하고 싶을때 콜백함수 이용해서 쓸 수 있다!
*/

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
})

console.log(json);

/*
함수는 object에 있는 데이터가 아니기 때문에, 함수(jump)는 제외되고
자바스크립트에 자체로 들어있는 symbol 같은 JS 만 있는 특별한 데이터도
JSON 에 포함되지 않는다.

{"name":"tori","color":"white","size":null,"birthDate":"2022-06-26T06:08:40.661Z"}
*/


// 2. JSON to Object
// parse(json)

/*

console.clear();
json = JSON.stringify(rabbit);
console.log(json) // {"name":"tori","color":"white","size":null,"birthDate":"2022-07-10T03:53:30.838Z"} birthDate가 str 형태로 만들어졌다 -> json을 다시 obj로 가져올때도 str으로 할당!
const obj = JSON.parse(json); // 변환하고 싶은 json 전달
console.log(obj);
// {name: 'tori', color: 'white', size: null, birthDate: '2022-07-10T03:41:44.602Z'}

rabbit.jump(); // rabbit obj에는 jump 함수가 있어서 출력되는데
// obj.jump(); 
하지만, 변환한 obj는 serialize가 된, 즉 str으로 만들어진 json으로부터 
다시 obj를 만들었기 때문에 함수는 serialize 될 때 포함되지 않았기 때문에
우리가 다시 json으로부터 object를 만든 것에는 jump라는 API가 없어 출력하면 에러발생함!

토끼라는 obj를 JSON으로 변환할때는 데이터만 가고, 함수는 전혀 포함되지않음!


console.log(rabbit.birthDate.getDate()); // Date라는 api에 존재하는 getDate를 쓸 수 있다
console.log(obj.birthDate);

반대로 json으로부터 만든 obj에 출력하면 에러가 발생한다
왜냐하면 birthDate는 str이기 때문이다. json으로만든 데이터 자체에있는 str이 object에 할당된 것이다
반면, rabbit에 있는 Date는 Date라는 object 자체였다. 그래서 세밀하게 다시 Date로 변환하고 싶을 때 콜백함수 이용할 수 있다!
revival 콜백함수!!

*/

console.clear();
json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  // return value;
  return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());


// JSON Diff -> 문제 디버깅할 때 유용
// JSON Beautifier
// JSON Parser -> json 타입을 object 형태로 확인하고 싶을 때
// JSON Validator -> 유효한지 아닌지 확인할 때

