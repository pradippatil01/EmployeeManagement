var employeeData = [];
$(document).ready(function () {
    let innerHtml = '';
    $.ajax({
        url: 'http://localhost:3000/employee/read',
        type: "GET",
        contentType: 'application/json',
        success: function (result) {
            let employeeArray = result.data;
            $.each(employeeArray, function (index, value) {
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
                                 <td> <button type="button" class="btn btn-danger" onclick="deleteEmployee(${index});return false">Delete</button></td>
                                 </tr>
                                 `
            })
            $('#employee_data').append(innerHtml)
        },
        error: function (error) {
            console.log(`Error ${error}`);
        }
    });
});
