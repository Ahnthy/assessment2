class Student {
    constructor (rootId, students) {
        this.rootId = rootId;
        this.studentList = students;
        this.refresh ();
    }

    generateRow (id, fname, lname, qual) {
        return `<div class="row">${id} | ${fname} ${lname} | ${qual}</div>`;
    }

    generateList (students) {
        let html = "";
        for (let i = 0; i < students.length; i++) {
            let student = students[i];
            html += this.generateRow (student.studentID, student.firstName, student.lastName, student.qualification);
        }
        return html;
    }

    refresh () {
        let elementString = this.generateList (this.studentList);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
    }

    add (id, fname, lname, qual) {
        this.studentList.push(
            {studentID: id, firstName: fname, lastName: lname, qualification: qual}
        );
        this.refresh ();
    }

    searchById (id) {
        let shortList = [];
        for (let student of this.studentList) {
            if (student.studentID == parseInt(id, 10)) {
                shortList.push (student);
            }
        }
        
        let elementString = this.generateList (shortList);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
    }
}