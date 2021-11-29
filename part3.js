class Student {
    constructor (rootId, students) {
        this.rootId = rootId;
        this.studentList = students;
        this.refresh ();
    }

    generateRow (index, id, fname, lname, qual) {
        return `<div class="row" index-id="${index}">${id} | ${fname} ${lname} | ${qual}</div>`;
    }

    generateList (students) {
        let html = "";
        for (let i = 0; i < students.length; i++) {
            let student = students[i];
            html += this.generateRow (i, student.studentID, student.firstName, student.lastName, student.qualification);
        }
        return html;
    }

    refresh () {
        let elementString = this.generateList (this.studentList);
        let rootElement = document.getElementById(this.rootId);
        rootElement.innerHTML = elementString;
    }

    add (id, fname, lname, qual) {
        let dupes = "n";
        for (let student of this.studentList) {
            if (student.studentID == parseInt(id, 10)) {
                dupes = "y";
            }
        }
        if (dupes == "y") {
            window.alert("Student ID (" + id + ") already exists!\nTry again with different ID");
        } else {
            this.studentList.push(
                {studentID: id, firstName: fname, lastName: lname, qualification: qual}
            );
        }
        this.refresh ();
    }

    update (index, fname, lname, qual) {
        this.studentList[index].firstName = fname;
        this.studentList[index].lastName = lname;
        this.studentList[index].qualification = qual;
        this.refresh();
    }

    delete (id) {
        let index = 10000;
        let name = "";
        let qual = "";
        for (let student of this.studentList) {
            if (student.studentID == parseInt(id, 10)) {
                index = this.studentList.indexOf(student);
                name = student.firstName + " " + student.lastName;
                qual = student.qualification;
            }
        }
        if (index != 10000) {
            if (confirm("Are you sure you want to delete this student?\n Student ID : " + id + "\n Name : " + name + "\n Qualification : " + qual)) {
                this.studentList.splice(index, 1);
            }
        } else {
            window.alert("Student ID (" + id + ") doesn't exist!")
        }
        this.refresh();
    }

    sortAsc () {
        this.studentList.sort(function (a, b) {
            return a.studentID - b.studentID;
        });
        this.refresh();
    }

    sortDesc () {
        this.studentList.sort(function (a, b) {
            return b.studentID - a.studentID;
        });
        this.refresh();
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