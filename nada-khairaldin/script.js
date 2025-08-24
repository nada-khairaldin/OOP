/* Second Task: (Student System)
1. Create a Student constructor function with the following properties:
    - name
    - age
    - grade
    - introduce() method that logs a message like:


"Hi, my name is Ali, I’m 20 years old, and I’m in grade A."Notice that Ali, 20 and A are coming from the properties name, age and grade of the constructor function.
2. Make grade property private and can be accessed using getGrade() and set its value using setGrade() , the grade should be only A or F (you should validate it) */

function Student(name, age) {
  this.name = name;
  this.age = age;

  let grade;
  function validateGrade(grade) {
    return grade === "A" || grade === "F";
  }

  this.setGrade = (sGrade) => {
    if (validateGrade(sGrade)) grade = sGrade;
    else
      console.log("Please enter a valid grade, It should be only 'F' or 'A' ");
  };

  this.getGrade = () => grade;
}

Student.prototype.introduce = function () {
  console.log(
    `Hi, my name is ${this.name}, I’m ${
      this.age
    } years old, and I’m in grade ${this.getGrade()}.`
  );
};

const student1 = new Student("nada", 21);
student1.setGrade("A");
student1.introduce(); //Hi, my name is nada, I’m 21 years old, and I’m in grade A
console.log(student1.getGrade()); // A
console.log(student1.grade); // undefined -> private variable
student1.setGrade("B"); // Please enter a valid grade, It should be only 'F' or 'A'

