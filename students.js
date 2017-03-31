function Student (name, subject, gpa){
	this.name = name;
	this.subject = subject;
	this.gpa = gpa;
}

function Course (professor, room){
	//array of students
	//num students in class
	//professor name
	//room number
	//add student function

	this.students = [];
	this.numStudents = function() {
		this.students.length; //to fix
	}
	this.professor = professor;
	this.roomNumber = room;
	this.addStudent = function(n,s,g) {
		this.students.push(new Student(n,s,g));
	}
}


var bootcamp = new Course("Bill Nye", "007");

console.log(bootcamp.numStudents());
bootcamp.addStudent("GGG", "H", 999);
console.log(bootcamp.numStudents());
console.log(bootcamp.students);