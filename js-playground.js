// let person = {
//   name: "Mostafa",
//   age: 30,
//   print: function () {
//     console.log(this.name, this.age);
//   },
// };
// person.print();

// const constructFn = function () {
//   this.name = "Eslam";
//   this.age = 15;
//   this.fn = function () {
//     console.log(this.name, this.age);
//   };
//   this.compare = function () {
//     console.log(
//       `this compare`,
//       this,
//       constructFn.prototype,
//       this === constructFn.prototype
//     );
//   };
// };

// const obj = new constructFn();
// obj.fn();
// // obj.compare();
// // console.log(`this is the object`,obj);
// // console.log(`this is the object prototype `,obj.__proto__);
// // console.log(`this is the constructive function `,constructFn);
// // console.log(`this is the constructive function prototype`,constructFn.__proto__);

// const obj2 = {
//   a: 1,
//   b: 2,
// };

// console.log(obj2.__proto__ === Object.prototype);
// console.log(constructFn.__proto__.__proto__ === Object.prototype);

// // make a toggle section visibility button //
// const tasksSection = document.querySelector(`#tasks-section`);
// document.querySelector(`.tasks-toggle-btn`).addEventListener('click',()=>tasksSection.classList.toggle('invisible'));

/////////////////////////////////////////////////////////////////////////////////

// const numberArray=[1,2,3];

// const newArr = numberArray.map(item=>{return{val:item}});
// console.log(newArr);

/////////////////////////////////////////////////////////////////////////////////
// destructing arrays
// const nums = [1,2,3,4,5,6,7,8,9,];
// const [one,two,three,four,...remainingNums] = nums;
// console.log(one);


// [f0,s0,t0] = [1,2,3];
// console.log(f0,s0,t0);

// const [f1,s1,t1] = [1,2,3];
// console.log(f1,s1,t1);

/////////////////////////////////////////////////////////////////////////////

// Library Side
const personSymbol = Symbol("id");


const p1 = {
  [personSymbol]:1,
  name:"Mostafa",
  age:21,
}

const p2 = {
  [personSymbol]:2,
  name:"Mostafa",
  age:21,

}

// Developer Side
console.log(p1);
console.log(p2);
