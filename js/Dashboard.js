var empIdArray = [];
$(document).ready(function () {
    let innerHtml = '';
    $.ajax({
        url: 'http://localhost:3000/employee/read',
        type: "GET",
        contentType: 'application/json',
        success: function (result) {
            let employeeArray = result.data;
            $.each(employeeArray, function (index, value) {
                empIdArray.push(value._id)
                innerHtml += `<tr>
                                 <td> ${value.firstName}</td>
                                 <td> ${value.lastName}</td>
                                 <td> ${value.gender}</td>
                                 <td> ${value.phoneNumber}</td>
                                 <td> ${value.salary}</td>
                                 <td> ${value.emailID}</td>
                                 <td> ${value.city}</td>
                                 <td> ${value.department}</td>
                                 <td> <button  class="btn btn-warning" onclick="getDataById(${index})">Edit</button></td>
                                 <td> <button type="button" class="btn btn-danger" onclick="deleteEmpData(${index});return false">Delete</button></td>
                                 </tr>
                                 `
            })
            $('#employee_data').append(innerHtml)
        },
        error: function (error) {
            alert(`Error ${error}`);
        }
    });
});
/**
 * @method deleteEmpData delete data from database and reload page
 */
deleteEmpData = (id) => {
    let employeeId = empIdArray[id];
    $.ajax({
        type: "delete",
        url: ("http://localhost:3000/employee/" + employeeId),

        success: (result) => {
            alert("Employee " + result.data.firstName + " " + result.data.lastName + " Deleted Successfully..!")
            location.reload();
        },

        error: (err) => {
            alert("Error ", err)
        }
    });

}

/**
 * @method getDataById getdata and edit data
 */
getDataById = (id) => {
    let employeeId = empIdArray[id];
        localStorage.setItem("id", employeeId);
        console.log("local " + localStorage.getItem("id"))
        window.open("http://127.0.0.1:5500/html/Home.html?", target = "_self");
}

addNewEmployee=()=>{
    localStorage.removeItem("id");
}