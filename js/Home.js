register = () => {
    let employeeData = {
        "firstName": document.getElementById("firstName").value,
        "lastName": document.getElementById("lastName").value,
        "gender": document.getElementById("gender").value,
        "phoneNumber": document.getElementById("phoneNumber").value,
        "salary": document.getElementById("salary").value,
        "emailID": document.getElementById("emailID").value,
        "city": document.getElementById("city").value,
        "department": document.getElementById("department").value
    }
    if (localStorage.getItem("id") == null) {
        $.ajax({
            type: "post",
            url: 'http://localhost:3000/employee/register',
            data: JSON.stringify(employeeData),
            contentType: 'application/json',
            success: (result) => {
                if (result.success == false) {
                    alert("Invalid Input..!!");
                } else {
                    alert('Data added..!!', result);
                    resetForm();
                }
            },
            error: function (error) {
                console.log(error)
                alert('error in ', error);
            }
        });
    } else {
        let id = localStorage.getItem("id")
        $.ajax({
            type: "put",
            url: "http://localhost:3000/employee/update/"+id,
            data: JSON.stringify(employeeData),
            contentType: "application/json",
            success: (result) => {
                if (result.success == false) {
                    alert("Invalid Input..!!");
                }
                else {
                    alert("Employee Data Updated Sucessfully");
                    resetForm();
                }
            },
            error: (err) => {
                console.log("Error ", err)
            }
        })
    }
}


onLoad=()=>{
    if (localStorage.getItem("id") == null) {
        localStorage.clear();
        }
    else {
        document.getElementsByClassName('form-head').innerHTML='update employee data';
        document.getElementById("submitButton").innerHTML = "Update";
        console.log("Local Storage = " + localStorage.getItem("id"))
        let employeeId = localStorage.getItem("id")
        $.ajax({
            type: "get",
            url: "http://localhost:3000/employee/get/" + employeeId,
            data: "json",
            success: (result) => {
                empData = result.data;
                $("#firstName").val(empData.firstName);
                $("#lastName").val(empData.lastName);
                $("#gender").val(empData.gender);
                $("#phoneNumber").val(empData.phoneNumber);
                $("#salary").val(empData.salary);
                $("#emailID").val(empData.emailID);
                $("#city").val(empData.city);
                $("#department").val(empData.department);
                document.getElementById("submitButton").innerHTML = "Update";
            },
            error: (err) => {
                console.log("Error ", err)
            }
        })
    }
}

var resetForm = () => {
        setValue('#firstName', '');
        setValue('#lastName', '');
        setValue('#gender', 'Male');
        setValue('#phoneNumber', '');
        setValue('#salary', '');
        setValue('#emailID', '');
        setValue('#city', '');
        setValue('#department', '');
        localStorage.clear();
        document.getElementById("submitButton").innerHTML = "Submit";
        location.reload();
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

