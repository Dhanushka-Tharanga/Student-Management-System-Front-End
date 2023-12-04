
let btnRegister = document.getElementById("register-button");

    let studentRegister={
  studentName : undefined,
  studentAge  :undefined,
  studentContact :undefined,
  guardianName    :undefined,
  guardianAddress :undefined,
  guardianContact :undefined
  }

btnRegister.addEventListener("click",()=>{

    studentRegister.studentName=document.getElementById("student-name").value;
    studentRegister.studentAge=document.getElementById("student-age").value;
    studentRegister.studentContact=document.getElementById("student-contact").value;

    studentRegister.guardianName = document.getElementById("guardian-name").value;
    studentRegister.guardianAddress = document.getElementById("guardian-address").value;
    studentRegister.guardianContact = document.getElementById("guardian-contact").value;
    
  fetch("http://localhost:8080/student", {
 
      method: "POST",
      headers: {
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(studentRegister)
    })
})





let clear= document.getElementById("clear-button");

  clear.addEventListener("click",()=>{

    document.getElementById("student-name").value="";
    document.getElementById("student-age").value="";
    document.getElementById("student-contact").value="";
    document.getElementById("guardian-name").value="";
    document.getElementById("guardian-address").value="";
    document.getElementById("guardian-contact").value="";
  });




let btnLoadStudent = document.getElementById("btn-load-student");

btnLoadStudent.addEventListener("click", () => {

    fetch("http://localhost:8080/student")
        .then(response => response.json())
        .then(json => {

          let studentTable = document.getElementById('student-list');

            let tableRow = `<tr>
                            <td>Student Name</td>
                            <td>Student Age</td>
                            <td>Student Contact</td>
                            </tr>`;

            json.forEach(element => {
                tableRow +=
                 `<tr>
                    <td>${element.studentName}</td>
                    <td>${element.studentAge}</td>
                    <td>${element.guardianAddress}</td>
                    
                  </tr>`
                
            });

            studentTable.innerHTML = tableRow;

        })   
});



