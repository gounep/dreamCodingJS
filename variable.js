// Whole-script strict mode syntax
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict'; // 순수 바닐라 JS 쓸 땐 파일 제일 위에 선언하는 것을 추천 -> 조금 더 상식적인 범위 안에서 JS 이용 가능! JS 엔진이 좀 더 효율적이고 빠르게 분석할 수 있어, 실행에 더 나은 성능을 기대할 수 있음!

console.log('Hello world!');

// 입력/ 연산/ 출력
// 전송 / CPU에 최적화된 연산 / 메모리의 사용을 최소화

// 1. Use strict
// added in ES 5
// use this for Vanila Javascript.
'use strict';

// 2. Variable (변수: 변경될 수 있는 값), rw(read/write)  -> 메모리에 값을 읽고 쓰는게 가능하다
// let (added in ES6)
// let name = 'ellie' 값 할당한 뒤 -> 'hello'로 변경 가능

let globalName = 'global name';
{
  let name = 'ellie'; // 선언 & 할당
  console.log(name); // ellie
  name = 'hello';
  console.log(name); // hello
  console.log(globalName); // 블럭 안에서도 가능
}
console.log(name); // block scope -> 블럭 밖에서는 접근x
console.log(globalName); // 블럭 밖에서도 가능

/* 
global scope -> 어느 곳에서나 접근 가능
global한 변수들은 어플리케이션이 실행되는 순간부터 끝날때까지 메모리에 탑재되어 있으므로
최소한으로 쓰는 것이 좋다. 가능하면 class나 함수, if 나 for loop 필요한 부분에서만
정의해서 쓰는 것이 좋다.
*/

/* 
application을 실행하면 application 마다 쓸 수 있는 메모리가 할당된다.
메모리는 텅텅 비어져있는 박스들인데, 어플리케이션마다 쓸 수 있는 박스들의 개수가
제한적으로 할당된다.
let name 을 정의하면 한 가지의 박스를 가리키는 포인터가 생기게 된다.
그래서 이 name 이라는 변수가 가리키고 있는 메모리 어딘가에 ellie라는 값을 저장할 수 있다.
그리고 추후에 name 의 변수가 가리키고 있는 곳에 다른 값을 넣어서 저장할 수 있다.

변수는 메모리 어딘가에 할당된 박스를 가리키고 있어서, 포인터를 이용해서 값을 계속 바꿔나갈 수 있다(mutable)
*/

// var (don't ever use this!)
// var hoisting (move declaration from bottom to top)
// has no block scope (블럭을 철저히 무시함)
{
  age = 4;
  var age;
}

// 변수 선언 후 값을 할당 (var는 선언도 하기 전에 값 할당, 출력도 가능 - undefined)
// 호이스팅 : 어디에 선언했느냐에 상관없이 항상 제일 위로 선언을 끌어올려주는 것
console.log(age); // let 이용하면 error
age = 4;
console.log(age);
var age;


// 3. Constant (한 번 할당하면 값이 절대 바뀌지 않음), r(read only) -> 읽기만 가능!
/*
constants는 가리키고 있는 포인터가 잠겨있어서 값을 선언함과 동시에 할당한 뒤로는
절대 다시는 값을 변경할 수 없다(immutable)

const 를 선언하고 값을 할당한 뒤로는 자물쇠가 생겨서 읽기만 가능하고, 
다시 다른값으로 쓰는 것이 불가능하다!

* use const whenever possible.
* only use let if variable needs to change.

* favor immutable data type always for a few reasons:
 - security
 - thread safety
 - reduce human mistakes

- thread safety (어플리케이션 실행되면 한 가지의 프로세스가 할당되고, 
  그 프로세스 안에서는 다양한 스레드가 동시에 들어가면서 
  어플리케이션을 좀더 빠르고 효율적으로 동작하도록 도와주는데,
  다양한 스레드들이 동시에 이 변수에 접근해서 값을 변경할 수가 있는데 
  -> 이것은 좀 위험함. 그래서 가능하면 값이 변하지 않는 것을 사용하는 것이 좋다.)

 */
const daysInWeek = 7;
const maxNumber = 5;

// mutable: let
// immutable: const

/* Note!!
* Immutable data types: primitive types, frozen objects (i.e. object.freeze())
-> data 자체를 절대 변경하지 못한다
-> primitive 타입의 경우 한번 ellie라는 string을 정의하게 되면 ellie를 통째로 메모리에 올렸다가
다른 str으로 변경이 가능하지, ellie라는 str 자체를 i를 빼고 다른 것으로 바꾼다던지, 데이터 자체를 변경하는 것은 불가능하다
* Mutable data types: all objects by default are mutable in JS 
-> object는 변경이 가능하다
*/


// 4. Variable types
/*
* primitive, single item: number, string, boolean, null, undefined, symbol
-> 더 이상 작은 단위로 나눠질 수 없는 한 가지 아이템
* object, box container
-> 싱글 아이템들을 여러 개 묶어서 한 단위로, 한박스로 관리할 수 있게 해주는 것
* function, first-class function
-> function 도 다른 데이터 타입처럼 1. 변수에 할당 가능하고, 2. 함수의 인자로도 전달되고,
   3. 함수에서 리턴타입으로도 function을 리턴 가능하다
*/

/*
C언어 - low level 언어
개발자들이 프로그램을 짜면서 좀 더 세세하게 메모리를 관리할 수 있다.
이 정도 사이즈의 메모리를 할당해야지~ 가 가능함!
shor, int, long -> 정수
float, double -> 실수
*/

const count = 17; // intege
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`)
console.log(`value: ${size}, type: ${typeof size}`)


// number - special numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2; // 숫자가 아닌 string 을 숫자로 나누면 NaN 출력 
console.log(infinity); // Infinity
console.log(negativeInfinity); // -Infinity
console.log(nAn); // NaN


// bigInt (fairly new, don't use it yet)
// 최근에 추가됨. 숫자 마지막에 n만 붙이면 bigInt로 간주됨
const bigInt = 1234567890123456789012345678901234567890n; // over (-2**53) ~ 2*53 : JS의 number
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
// Number.MAX_SAFE_INTEGER; -> 안다루심


// string
const char = 'c';
// console.log(`value: ${char} type: ${typeof char}`)
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);


// null -> 너는 텅텅 비어있는 empty 값이야 라고 지정함. 너는 아무것도 아니야
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined -> 선언은 되었지만 아무것도 값이 지정되어있지 않음
let x = undefined;
// lex x;
console.log(`value: ${x}, type: ${typeof x}`);


// symbol, create unique identifiers for objects
/*
맵이나 다른 자료구조에서, 고유한 식별자가 필요하거나, 아니면 동시다발적으로 일어날 수 있는
코드에서 우선순위를 주고 싶을 때 정말 고유한 식별자가 필요할 때 쓰임

간혹, 식별자를 string을 이용해 쓰는 경우도 있는데, string은 다른 모듈이나 파일에서
동일한 string을 썼을때 동일한 식별자로 간주된다.

반대로 심볼은, 동일한 str 을 작성했어도 다른 symbol 로 만들어지므로 주어지는 string에 상관없이
고유한 식별자를 만들때 사용되어짐 -> 프로그래밍에서 유용함
*/

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false

// str이 똑같다면 동일한 symbol 을 만들고 싶다면 아래처럼!
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
// console.log(`value: ${symbol1}, type: ${typeof symbol1}`)
// 위처럼 바로 출력하면 Cannot convert a Symbol value to a string 에러 나온다
// .descriptiong 으로 string 으로 변환해서 출력해야 함
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);



// object, real-life object, data structure
/* 
object : 일상생활에서 보는 물건과 물체들을 대표할 수 있는 box 형태
그냥 변수 name, age는 아무것도 설명이 안되지만, 아래처럼 ellie라는 object를 만들어서
ellie 의 이름은 ellie이고 나이는 20이다 라고 얘기할 수 있다
지금 ellie는 const 키워드로 지정되어 있어서 한번 할당된 이 object는 다시는
다른 object로 변경이 불가능하다
ellie는 const 키워드로 정의되어 있기 때문에 ellie가 가리키고 있는 메모리의 포인터는
잠겨 있어서 다른 object로 할당이 불가하지만, 
ellie object 안에는 name 과 age라는 변수들이 존재한다.
그래서 ellie.name, ellie.age 로 각각 포인터가 가리키는 메모리에 다른 값으로 할당이 가능하다
*/

const ellie = { name: 'ellie', age: 20 };
ellie.age = 21; // 그래서 이렇게 변경이 가능하다
console.log(ellie.age); // 21


// 5. Dynamic typing : dynamically typed language
/*
(vs) C, Java -> statically type language -> 변수를 선언할 때 어떤 type인지 결정해서
type을 같이 선언했던 반면에, JS는 선언할 때 어떤 type인지 선언하지 않고
runtime 프로그램이 동작할 때 할당된 값에 따라서 type이 변경될 수 있다!
내가 좋은 아이디어 있을 때 빠르게 프로토타입 할땐 유연하게 쓸 수 있는 언어지만,
어느정도 규모있는 프로젝트 만들 때, 불똥떨어질 수 있다
*/

let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // hello, string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // 1, number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // 75, string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // 4, number
// console.log(text.charAt(0)); // Uncaught TypeError: text.charAt is not a function
// runtime 으로 type 이 정해지기 때문에 에러가 runtime으로 발생하는 경우가 많음
// typescript -> JS 위에 type 이 올려진 언어


/*
메모리에 값이 저장되는 방법은 2가지가 있다
- primitive type
- object type 
인지에 따라 메모리에 값이 다른 방식으로 저장된다

* primitive type -> value 값 자체가 메모리에 저장 (ex. 'ellie', 'hello')

* object -> 너무 커서 메모리에 한번에 다 올라갈 수 없다.
따라서 const ellie = { name: 'ellie', age: 20 }; 선언&할당하게 되면
ellie 가 가리키는 곳에는 reference가 있다. 이 레퍼런스는 실제로 object를 가리키고 있는 곳이다. 
이 레퍼런스를 통해서 실제로 object가 담겨있는 메모리를 가리키게 된다
그래서 const ellie라고 선언하게 되면 ellie가 가리키고 있는 포인터만 잠겨서 
ellie가 다른 object로 변경이 불가능하지만, ellie의 이름과 나이는 변경이 가능하다 

그래서, primitive type은 value로 값이 저장되고
object는 object를 가리키는 레퍼런스가 메모리에 저장된다!
*/