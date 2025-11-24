class CourseStudent {
  constructor(id, name, grade) {
    this.id = id;
    this.name = name;
    this.grade = grade;
  }

  isExcellent() {
    return this.grade >= 90;
  }
}

const student = new CourseStudent(1, 'Quincy', 96);
const excellent = student.isExcellent();
console.log(excellent); // true

const student2 = new CourseStudent(2, 'Dusan', 80);
console.log(student2.isExcellent()); // false
