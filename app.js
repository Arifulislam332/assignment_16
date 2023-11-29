// object
const student = {
  // key-value pair
  fullName: "Shizuka",
  birthYear: 2004,
  district: "Dhaka",
  isSheDevloper: true,
  herSkill: ["Microsoft", "JavaScript", "Cprogaming"],
};

Object.seal(student);
Object.freeze(student);
// dot notation
console.log(student);
console.log(student.fullName);
console.log(student.herSkill);
console.log(student.herSkill.length);
console.log(student.herSkill[1]);
console.log(student["district"]); //bracket notation
console.log(student["herSkill"][0]);

// mutate/modify properties
student.fullName = "Shizuka & Nobita";
student.herSkill = ["C++", "C#", ".NET"];
student.herSkill[1] = "Paython";

console.log(student);

// add new property
student.mothersName = "Sokhina Begum";
student.fathersName = "Alom";

delete student.fullName;
console.log(student);

const programming = {
  langName: "JavaScript",
  libraries: [
    "React",
    "JQuery",
    {
      learningCurve: "Medium",
      architeture: "MVC",
    },
  ],
};

console.log(programming.libraries[2].learningCurve);

// methods inside objects
const myInfo1 = {
  myName: "Ayatullah",
  examJSC: 2019,
  calcYear: function (examJSC) {
    return 2023 - examJSC;
  },
};
console.log(myInfo1.calcYear(2019));
const myInfo2 = myInfo1;

myInfo2.myName = "Arifu miya";

console.log(myInfo1);
console.log(myInfo2);

// loops /
for (let i = 1; i <= 20; i++) {
  console.log(i, "HELLO");
}

const numbers = [10, 20, 30, 40, 51, 60, 70, 80, 90, 100];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
const numbers = [10, 17, 30, 40, 53, 60, 70, 80, 95, 100];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) console.log("Even", numbers[i]);
  if (numbers[i] % 2 !== 0) console.log("Odd", numbers[i]);
}

const myNums = [-5, -6, 5, 0, -8, 12, -2, 10];

for (let i = myNums.length - 1; i >= 0; i--) {
  if (myNums[i] < 0) {
    console.log(myNums[i]);
  }
}

const animals = ["Monkey", "Lion", "Fox", "Beer"];

for (let i = 0; i < animals.length; i++) {
  if (animals[i] === "Fox") {
    continue;
  }
  console.log(animals[i]);
}

const langs = ["C++", "Java", "C#", "Paython"];
let x = langs.length - 1;
while (x >= 0) {
  console.log(langs[x]);
  x--;
}
