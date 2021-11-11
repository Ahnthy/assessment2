let initStudents = [
    {studentID: 1009, firstName: "Harry", lastName: "Potter", qualification: "Diploma"},
    {studentID: 1005, firstName: "Ronald", lastName: "Weasley", qualification: "CerfificateIV"},
    {studentID: 1010, firstName: "Hermione", lastName: "Granger", qualification: "Bachelor"},
    {studentID: 1004, firstName: "Draco", lastName: "Malfoy", qualification: "Bachelor"},
    {studentID: 1001, firstName: "Albus", lastName: "Dumbledore", qualification: "Master"},
    {studentID: 1002, firstName: "Severus", lastName: "Snape", qualification: "Master"},
    {studentID: 1008, firstName: "Neville", lastName: "Longbottom", qualification: "Diploma"},
    {studentID: 1003, firstName: "Minerva", lastName: "McGonagall", qualification: "Master"},
    {studentID: 1006, firstName: "Rubeus", lastName: "Hagrid", qualification: "CerfificateIV"},
    {studentID: 1007, firstName: "Tom", lastName: "Riddle", qualification: "Diploma"}
];
studentList = new Student ("init-list", initStudents);

function refreshClick () {
    studentList.refresh ();
}

function searchClick () {
    let formElements = document.getElementById("form-list-control").elements;
    let id = formElements["search-string"].value;
    studentList.searchById (id);
}

function addClick () {
    let formElements = document.getElementById("form-add").elements;
    let id = formElements["id"].value;
    let fname = formElements["fname"].value;
    let lname = formElements["lname"].value;
    let qual = "-";
    studentList.add (id, fname, lname, qual);
}