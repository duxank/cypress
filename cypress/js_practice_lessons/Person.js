class CourseStudent {
  constructor(name, courseStudent, grade) {
    this.name = name; // property
    this.courseStudent = courseStudent;
    this.grade = grade; // property
  }

  isExcellent() {
    return this.grade >= 90;
  }
}

const student = new CourseStudent(1, 'Quincy', 96);
const excellent = student.isExcellent();
console.log(excellent); // Output: true

const student2 = new CourseStudent(1, 'Dusan', 80);
const excellent2 = student2.isExcellent();
console.log(excellent2); // Output: true
