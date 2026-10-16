class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `My name is ${this.name} and I am ${this.age} years old.`;
  }
}

const student1 = new Student("Sanjana", 24);
const student2 = new Student("Rahul", 22);

console.log(student1.introduce());
console.log(student2.introduce());
