console.log('hello Raf');

// linking elements to the DOM
// let employeeTable = document.querySelector('employeeTable'); 

//Defining the variables
// let firstName = '';
// let lastName ='';
// let idNumber = 0;
// let jobTitle = '';
// let annualSalary = 0;
let annualSalaryCombined = 0;


function salaryCalculator(event) {
    //linking to table
let employeeTable = document.querySelector('#employeeTable'); 
// linking to the form
let firstName = document.querySelector('#firstName').value;    
let lastName = document.querySelector('#lastName').value;
let idNumber = document.querySelector('#idNumber').value;
let jobTitle = document.querySelector('#jobTitle').value;
let annualSalary = document.querySelector('#annualSalary').value;
//linking to the total Monthly
let totalMonthly = document.querySelector('#totalMonthly');

//check to see if it works
// console.log('First Name', firstName);
// console.log('Last Name', lastName);
// console.log('id Number', idNumber);
// console.log('Job title', jobTitle);
// console.log('salalry', annualSalary);

employeeTable.innerHTML +=`
        <tr>
            <th>${firstName}</th>
            <th>${lastName}</th>
            <th>${idNumber}</th>
            <th>${jobTitle}</th>
            <th>$${annualSalary}</th>
          </tr>
`
annualSalaryCombined += Number(annualSalary);

console.log('Combined salary thing', annualSalaryCombined);

totalMonthly.innerHTML = `
<h2>Total Monthly: $${annualSalaryCombined}</h2>
`


}