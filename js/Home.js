
register =  (event) => {
    let employeeData = {
        "firstName": document.getElementById("firstName").value,
        "lastName": document.getElementById("lastName").value,
        "gender": document.getElementById("gender").value,
        "phoneNumber": document.getElementById("phoneNumber").value,
        "salary": document.getElementById("salary").value,
        "emailID": document.getElementById("emailID").value,
        "city":document.getElementById("city").value,
        "department": document.getElementById("department").value
    }
    
    $.ajax({
        type: "post",
        url: 'http://localhost:3000/employee/register',
        data: JSON.stringify(employeeData), 
        contentType: 'application/json',
        success: function (result) {
            console.log(result);
            if (result.success == false) {
                alert("Invalid Input..!!");
            }else{
                alert('Data added..!!',result);
               // window.open("http://127.0.0.1:5500/html/Dashboard.html#", target = "_self");
                resetForm();
            }
        },
        error: function (error) {
            console.log(error)
            alert('error in ', error);
        }
    });
}

const resetForm = () => {
    setValue('#firstName', '');
    setValue('#lastName', '');
    setValue('#gender', 'Male');
    setValue('#phoneNumber', '');
    setValue('#salary', '');
    setValue('#emailID', '');
    setValue('#city', '');
    setValue('#department', '');
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

