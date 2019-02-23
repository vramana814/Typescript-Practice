
//Demo on Protected Access Modifiers

class myPersonalInfo{
    protected myName:string;
    protected myQualification:string;
    protected myHobby:string;

  // address:string;

    constructor(name:string,qual:string,hobby:string){
        this.myName=name;
        this.myQualification=qual;
        this.myHobby=hobby;
    }
}


class myProfessionalInfo extends myPersonalInfo{
    myOffice:string;
    myPlatform:string;
    mySalary:number;

    constructor(name:string,qual:string,hobby:string,office:string,platform:string,salary:number){
        super(name,qual,hobby);
    }   
}

var personalInfo = new myPersonalInfo("Vankat","M.Tech","coding");

console.log(personalInfo);