function triple(x) {
  return 3 * x;
}
var result = triple(3);
console.log(result);

var showMessage2 = function () {
  console.log("E");
};
function declarationFunction() {}
var expressionFunction = function () {};

var fullName = "Toi la ai";

console.log(fullName.length);
showMessage2();

var firstName = "Son";
var lastName = "Dang";

console.log(`Toi la: ${firstName} ${lastName}`);

//Lam Viec voi chuoi

var myString = "        Hoc JS tai F8!     ";

//Keyword: Javascript string methods

//1. Length
console.log(myString.length);

//2. Find index
console.log(myString.indexOf("JS", 6));
console.log(myString.lastIndexOf("JS"));
console.log(myString.search("JS"));

//3. Cut string
console.log(myString.slice());
console.log(myString.slice(-3, -1));
//4. Replace
console.log(myString.replace(/JS/g, "Javascript"));
//5. Convert to upper case
console.log(myString.toUpperCase());
//6. Convert to lower case
console.log(myString.toLowerCase());
//7. Trim
//Loai bo khoang trang o 2 dau
console.log(myString.trim().length);
//8. Split
//Cat chuoi thanh array
var language = "Javascript, PHP, Ruby";
var language2 = "Javascipt";
console.log(language.split(", "));
console.log(language2.split(""));
//9. Get charater by index
const myString2 = "Son Dang";
console.log(myString2.charAt(1));
console.log(typeof myString2.charAt(10));

//Bai tap thuc hanh chuoi 1
var coursesStr = "HTML & CSS, JavaScript, ReactJS";

function strToArray(str) {
  return str.split(", ");
}

// Expected results
console.log(strToArray(coursesStr));

/*
Kieu so (Number) trong Javascript
1. Tao gia tri Number
 - Cac cach tao
 - Dung cach nao ?
 - Kiem tra data type

2. Lam viec voi Number
 - To String
 - To Fixed
*/

var age = 18;
console.log(typeof age);

var PI = 3.14;
console.log(typeof PI);

var otherNumber = new Number(9);
console.log(typeof otherNumber);

var result = 20 / "ABC";
console.log(result);
console.log(typeof result);
console.log(isNaN(result));

console.log(typeof age.toString());

// Lam tron so
var money = 3000.124214235;
console.log(PI.toFixed());
console.log(typeof PI.toFixed());
console.log(money.toFixed(2));

function isNumber(value) {
  if (typeof value === "number" && !isNaN(value)) {
    return true;
  }
  return false;
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber("abc")); // false
console.log(isNumber("100")); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / "abc")); // false

/*
Mang trong Javascript - array

1. Tao mang
 - Cach tao
 - Su dung cach nao
 - Kiem tra data type
2. Truy xuat mang
    - Do dai mang
    - Lay phan tu theo index
*/

var languages = [
  "Javascript",
  "PHP",
  "Ruby",
  "Dart",
  null,
  undefined,
  function () {},
  {},
  123,
];

console.log(languages);
console.log(typeof languages);
console.log(Array.isArray(languages));
var languages2 = new Array(
  "Javascript",
  "PHP",
  "Ruby",
  "Dart",
  null,
  undefined,
  function () {},
  {},
  123
);
console.log(languages2);
console.log(typeof languages2);

console.log(languages.length);
console.log(languages[1]);

/*
Lam viec voi Array

Javascript array methods

1. To String
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/

var languages = ["Javascipt", "PHP", "Ruby"];

console.log(languages.toString());

console.log(languages.join(" - "));

console.log(languages.pop()); // Xoa element cuoi mang va tra ve phan tu da xoa
console.log(languages);
console.log(languages.push("Dart", "Java")); //Them element vao cuoi mang va tra ve length moi cua mang
console.log(languages);
console.log(languages.shift()); //Xoa element dau mang va tra ve phan tu da xoa
console.log(languages);
console.log(languages.unshift("Javascript", "C++")); //Them element dau mang va tra ve length moi cua mang
console.log(languages);
languages.splice(1, 1);
// splice(vi tri con tro, so phan tu muon xoa, phan tu muon them vao)
console.log(languages);
languages.splice(1, 0, "C++");
console.log(languages);
var secLanguages = ["Kotlin", "Ruby"];
console.log(languages.concat(secLanguages));
console.log(languages.slice(1, 2));

// Viết hàm tại đây
function getLastElement(array) {
  var index = array.length;
  return array[index - 1];
}

// Ví dụ sử dụng
var animals = ["Monkey", "Tiger", "Elephant"];
var result = getLastElement(animals);

console.log(result); // Expected: "Elephant"
console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// Object trong Javascript

var emailKey = "email";
var myInfo = {
  name: "Son Dang",
  age: 18,
  address: "Hanoi, VN",
  [emailKey]: "sondn@fullstack.edu.vn",
  getName: function () {
    return this.name;
  },
};
var myKey = "address";
delete myInfo.age;
console.log(myInfo);
console.log(myInfo.name);
console.log(myInfo[myKey]);
console.log(myInfo.getName());

//Object constructor

function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };

  this.setName = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  };
}

var author = new User("Son", "Dang", "Avatar");
var student = new User("Vu", "Nguyen", "Avatar");

author.title = "Chia se dao tai F8";
student.comment = "lieu co khoa asp.net k ad";

console.log(author);
console.log(student);
console.log(author.getName());
console.log(student.getName());
student.setName("Nam", "Pham");
console.log(student.getName());

/*
    Object prototype - Basic

    1. Prototype la gi
    2. Su dung khi nao
*/
function User2(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

User2.prototype.className = "F8";
User2.prototype.getClassName = function () {
  return this.className;
};
var user = new User2("Son", "Dang", "Avatar 1");
var user2 = new User2("Tan", "Dang", "Avatar 2");

console.log(user.className);
console.log(user2.getClassName());

//Doi tuong Date
var date = new Date();

var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(`${day}/${month}/${year}`);
console.log(date.toString());

/*
Math object
- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()
 */

console.log(Math.PI);
//Lam tron
console.log(Math.round(1.25));
console.log(Math.abs(-5));
//Lam tron tren
console.log(Math.ceil(1.2));
//Lam tron duoi
console.log(Math.floor(1.999999));
//Random trong khoang tu 0 - 1
console.log(Math.random());
var random = Math.floor(Math.random() * 5);

var bonus = ["10 coin", "20 coin", "30 coin", "40 coin", "50 coin"];

console.log(bonus[random]);
