enum WeekDays{
    Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
}

enum Status{
    success=101,failure
}

class employeeDetails{
    ID:number;
    Name:string;
    dayOff:number;
    status:number;

    /*
    constructor(id:number,name:string,dayoff:string){
        this.ID=id;
        this.Name=name;
        this.dayOff=dayoff;
    }*/
}

var empObj = new employeeDetails();

empObj.ID=101;
empObj.Name="Venkat";
empObj.dayOff=WeekDays.Saturday;
empObj.status=Status.failure;

console.log(empObj);