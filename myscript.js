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

function reset () {
    let formSearchElements = document.getElementById("form-list-control").elements;
    formSearchElements["search-string"].value = "";

    let formAddElements = document.getElementById("form-add").elements;
    formAddElements["id"].value = "";
    formAddElements["fname"].value = "";
    formAddElements["lname"].value = "";

    let formUpdateElements = document.getElementById("form-update").elements;
    formUpdateElements["id"].value = "";
    formUpdateElements["fname"].value = "";
    formUpdateElements["lname"].value = "";
    formUpdateElements["qual"].value = "";

    let formDeleteElements = document.getElementById("form-delete").elements;
    formDeleteElements["id"].value = "";
}

function searchClick () {
    let formElements = document.getElementById("form-list-control").elements;
    let id = formElements["search-string"].value;
    studentList.searchById (id);
    reset ()
}

function addClick () {
    let formElements = document.getElementById("form-add").elements;
    let id = formElements["id"].value;
    let fname = formElements["fname"].value;
    let lname = formElements["lname"].value;
    let qual = "-";
    studentList.add (id, fname, lname, qual);
    reset ()
}

let indexNum = -1;

document.getElementById("init-list").addEventListener("click", function select (event) {
    let eTarget = event.target;
    console.log(eTarget);

    indexNum = parseInt(eTarget.getAttribute("index-id"));
    console.log(initStudents[indexNum])

    let formElements = document.getElementById("form-update").elements;
    formElements["id"].value = initStudents[indexNum].studentID;
    formElements["fname"].value = initStudents[indexNum].firstName;
    formElements["lname"].value = initStudents[indexNum].lastName;
    formElements["qual"].value = initStudents[indexNum].qualification;
})

function updateClick () {
    let formElements = document.getElementById("form-update").elements;
    let index = indexNum;
    let fname = formElements["fname"].value;
    let lname = formElements["lname"].value;
    let qual = formElements["qual"].value;
    if (index == -1) {
        window.alert("Select a student to update!")
    } else {
        studentList.update (index, fname, lname, qual);
    }
    reset ()
}

function deleteClick () {
    let formElements = document.getElementById("form-delete").elements;
    let id = formElements["id"].value;
    studentList.delete(id);
    reset ()
}

function ascClick() {
    studentList.sortAsc();
}

function descClick() {
    studentList.sortDesc();
}