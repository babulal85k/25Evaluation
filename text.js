function Student(name, roll_no, class_, section, marks_of_5_subjects) {
    this.name = name;
    this.roll_no = roll_no;
    this.class_ = class_;
    this.section = section;
    this.marks_of_5_subjects = marks_of_5_subjects;
  
    this.printTop3Subjects = function () {
      // Sort subjects based on marks
      const subjects = Object.keys(this.marks_of_5_subjects);
      const sortedSubjects = subjects.sort((a, b) => this.marks_of_5_subjects[b] - this.marks_of_5_subjects[a]);
  
      // Print top 3 subjects
      console.log('Top 3 Subjects:');
      for (let i = 0; i < 3; i++) {
        console.log(`${i + 1}. ${sortedSubjects[i]}`);
      }
    };
  
    this.printReportCard = function () {
      // Calculate percentage
      const totalMarks = Object.values(this.marks_of_5_subjects).reduce((total, mark) => total + mark, 0);
      const percentage = (totalMarks / (Object.keys(this.marks_of_5_subjects).length * 100)) * 100;
  
      // Print report card
      console.log('+--------------------+');
      console.log('|     REPORT CARD    |');
      console.log('+--------------------+');
      console.log(`| Name     - ${this.name}`);
      console.log(`| Roll no. - ${this.roll_no}`);
      console.log(`| Class    - ${this.class_}`);
      console.log(`| Section  - ${this.section}`);
  
      // Print subject-wise marks
      for (const subject in this.marks_of_5_subjects) {
        console.log(`| ${subject}  - ${this.marks_of_5_subjects[subject]}`);
      }
  
      console.log(`| Percentage - ${percentage.toFixed(1)}%`);
      console.log('+--------------------+');
    };
  }
  
  // Example usage
  const studentDetails = new Student('Huzaifa', 16, 'X', 'A', {
    science: 72,
    maths: 75,
    social_science: 79,
    english: 80,
    hindi: 67
  });
  
  // Calling methods
  studentDetails.printTop3Subjects();
  studentDetails.printReportCard();
  