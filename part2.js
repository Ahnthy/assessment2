/* 1. Define a student class */
class student {
    constructor (studentID, firstName, lastName, qualification) {
        this.studentID = studentID;
        this.firstName = firstName;
        this.lastName = lastName;
        this.qualification = qualification;
    }
}


/* 2. Create an array of at least 10 students with mock values */
let studentList = [
    new student (1009, "Harry", "Potter", "Diploma"),
    new student (1005, "Ronald", "Weasley", "CerfificateIV"),
    new student (1010, "Hermione", "Granger", "Bachelor"),
    new student (1004, "Draco", "Malfoy", "Bachelor"),
    new student (1001, "Albus", "Dumbledore", "Master"),
    new student (1002, "Severus", "Snape", "Master"),
    new student (1008, "Neville", "Longbottom", "Diploma"),
    new student (1003, "Minerva", "McGonagall", "Master"),
    new student (1006, "Rubeus", "Hagrid", "CerfificateIV"),
    new student (1007, "Tom", "Riddle", "Diploma")
]


/* 3. Sort array by Student ID in ascending order */
studentList.sort (
    function (a, b) {
        return a.studentID - b.studentID;
    }
)
console.log (studentList);


/* 4. Implement at least one search algorithm */
function sequentialSearchById (array, studentID) {
    let index = -1;
    for (let i = 0; i < array.length; i++) {
        if (array[i].studentID == studentID) {
            index = i;
            break;
        }
    }
    if (index == -1) {
        return "null";
    } else {
        return array[index];
    }
}