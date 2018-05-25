function employeAccount()
{
    document.querySelector('form.employeform').addEventListener('submit', function (e){
        e.preventDefault();
    });

    console.clear();
    alert("Open Console");

    var name = document.getElementById("name").value;
    var fullName = document.getElementById("fullname").value;
    var fatherName = document.getElementById("fathername").value;
    var nic = document.getElementById("nic").value;
    var attendence = document.getElementById("attendence").value;
    var overtimeAllowance = parseInt(document.getElementById("overtimeallowance").value);

    var fixSalary = parseInt(document.getElementById("fixsalary").value);
    var advanceSalary = parseInt(document.getElementById("advancesalary").value);
    var travellingAllowance = parseInt(document.getElementById("travellingallowance").value);
    var bonusAllowance = parseInt(document.getElementById("bonusallowance").value);
    var bonusPerMonth = parseInt(document.getElementById("bonuspermonth").value);
    var taxPerMonth = parseInt(document.getElementById("taxpermonth").value);

     var totalSalary = fixSalary + travellingAllowance + 
         bonusAllowance + overtimeAllowance + 
         bonusPerMonth - advanceSalary - taxPerMonth;

    console.log("\n-->Employee Details<--");
    console.log("Employe Name: " + name);
    console.log("Full Name: " + fullName);
    console.log("Father Name: " + fatherName);
    console.log("NIC: " + nic);
    console.log("Attendence: " + attendence);
    console.log("Overtime Allowance: " + overtimeAllowance);

    console.log("\n-->Salary Details<--");
    console.log("Fixed Salary: " + fixSalary);
    console.log("Advance Salary: " + advanceSalary);
    console.log("Travelling Allowance: " + travellingAllowance);
    console.log("Bonus Allowance: " + bonusAllowance);
    console.log("Bonus Per Month: " + bonusPerMonth);
    console.log("Tax Per Month: " + taxPerMonth);

    console.log("Total Salary: " + totalSalary);
}