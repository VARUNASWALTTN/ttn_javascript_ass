const employee =[
    {
        "name" : "varun",
        "age" : "25",
        "salary" : 3000,
        "D.O.B" : "03-10-1996"
    },
    {
        "name" : "shivam",
        "age" : "22",
        "salary" : 5600,
        "D.O.B" : "10-08-2001"
    },
    {
        "name" : "utkarsh",
        "age" : "23",
        "salary" : 800,
        "D.O.B" : "29-01-1999"
    },
    {
        "name" : "mannu",
        "age" : "22",
        "salary" : 500,
        "D.O.B" : "05-12-2000"
    }   
];

console.log("filter all employees with salary greater than 5000");
console.log(employee.filter(item => item.salary > 5000));

console.log("group employee on the basis of their age( age less than 25)");
console.log(employee.filter((e)=>(e.age>0 && e.age<25)));


console.log("details of employees salary < 1000  and age > 20 are and inrementint it 5 times :");
let filterSalary=employee.filter((e)=>(e.age>20&&e.salary<1000));
const filter = filterSalary.map((obj) => {
    obj.salary*=5;
    return obj;
})
console.log(filter);