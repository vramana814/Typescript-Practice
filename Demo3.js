var Employee = {
    Employee_Id: 100,
    Employee_Name: "Daniel",
    Salary: 50000,
    getResult: function () {
        if (this.Salary >= 30000)
            return "Team Lead";
        else {
            return "Developer";
        }
    }
};
console.log(Employee);
console.log(Employee.Employee_Id);
console.log(Employee.getResult());
