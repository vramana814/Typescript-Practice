//Demo on Hybrid Inheritance

class Person{
     ID:number;
    Name:string;
    Address:string;
    Contact:string;
    constructor(id:number,name:string,address:string,contact:string){
        this.ID=id;
        this.Name=name;
        this.Address=address;
        this.Contact=contact;
    }

}

class student extends Person{
   
    classSection:string;
    Grade:string;

    constructor(id:number,name:string,address:string,contact:string,clSection:string,grade:string){
        super(id,name,address,contact);
        this.classSection=clSection;
        this.Grade=grade;
    }
    getStudentDetails():string{
        return this.ID + " " + this.Name + "" +this.Address + "" +this.Contact + "" +this.classSection + ""+ this.Grade;
    }
}

class staff extends Person{
    Salary:number;
    Department:string;
    Qualification:string;

    constructor(id:number,name:string,address:string,contact:string,salary:number,dept:string,qual:string){
            super(id,name,address,contact);
            this.Salary=salary;
            this.Department=dept;
            this.Qualification=qual;
    }
    getStaffDetails():string{
        return this.ID + " " + this.Name + "" +this.Address + "" +this.Contact + "" +this.Salary + ""+ this.Department + ""+this.Qualification;
    }

}
class teachingStaff extends staff {
    subject:string;

    constructor(id:number,name:string,address:string,contact:string,salary:number,dept:string,qual:string,sub:string){
        super(id,name,address,contact,salary,dept,qual);
        this.subject=sub;
    }

    getTeachingStaffDetails():string{
        return    this.ID + " " + this.Name + "" +this.Address + "" +this.Contact + "" +this.Salary + ""+ this.Department + ""+this.Qualification + "" +this.subject;
    }

}

//creating student object by calling the constructor

var studentObj = new student(101,"Kumar","Hyd","998912356","5A","A+");
console.log(studentObj);

var staffObj = new staff(1001,"S Kumar","Chennai","9885123123",12000,"Science","Msc");
console.log(staffObj);

var teachingObj = new teachingStaff(1001,"S Kumar","Chennai","9885123123",12000,"Science","Msc","Biology");
console.log(teachingObj);














