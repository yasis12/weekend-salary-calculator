console.log('hello Raf');

// linking elements to the DOM
// let employeeTable = document.querySelector('employeeTable'); 

//Defining the variables
// let firstName = '';
// let lastName ='';
// let idNumber = 0;
// let jobTitle = '';
// let annualSalary = 0;



function salaryCalculator(event) {
let employeeTable = document.querySelector('#employeeTable'); 
let firstName = document.querySelector('#firstName').value;    
let lastName = document.querySelector('#lastName').value;
let idNumber = document.querySelector('#idNumber').value;
let jobTitle = document.querySelector('#jobTitle').value;
let annualSalary = document.querySelector('#annualSalary').value;

console.log('First Name', firstName);
console.log('Last Name', lastName);
console.log('id Number', idNumber);
console.log('Job title', jobTitle);
console.log('salalry', annualSalary);

employeeTable.innerHTML +=`
        <tr>
            <th>${firstName}</th>
            <th>${lastName}</th>
            <th>${idNumber}</th>
            <th>${jobTitle}</th>
            <th>$${annualSalary}</th>
          </tr>
`
}