function Student(name, age, id) {
    this.name = name;
    this.age = age;
    this.id = id;

    this.getString = function () {
        return this.name + " " + this.age + " " + this.id;
    }
}
///////////////////////////////////////////////////////////////////////
function Subject(name, description) {
    this.name = name;
    this.description = description;

    this.getString = function () {
        return this.name + " " + this.description;
    }
}
///////////////////////////////////////////////////////////////////////=
function Classroom(name) {
    this.name = name;
    this.subjects = [];
    this.students = [];
    this.addStudent = function (student) {
        this.students.push(student);
    }
    this.addSubject = function (subject) {
        this.subjects.push(subject);
    }
    this.getString = function () {
        var studentString = '';
        var subjectsString = '';
        for (var i = 0; i < this.students.length; i++) {
            studentString += this.students[i].getString() + "\t";
        }
        for (var j = 0; j < this.subjects.length; j++) {
            subjectsString += this.subjects[j].getString() + "\t";
        }
        return this.name + " Classroom has this subjects: " + subjectsString + " Classroom has these students: " + studentString;
    }
}


var student = new Student("Uros", 26, 10023012);
var b = new Student("Haris", 21, 10023013);
///////////////////////////////////////////////////////////////
var sub = new Subject("Bit-pp", "JavaScript");
var sub2 = new Subject("Bit-web", "HTML, CSS");
///////////////////////////////////////////////////////////////
var bit008 = new Classroom("Generacija 8")
bit008.addSubject(sub);
bit008.addSubject(sub2);
///////////////////////////////////////////////////////////////
bit008.addStudent(student);
bit008.addStudent(b);
///////////////////////////////////////////////////////////////

console.log(bit008.getString());


