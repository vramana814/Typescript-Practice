interface Icar{
    checkBluetooth():string;
    checkAC():string;
    checkPowerWindows():string;
}
class Car{

    Maker:string;
    Model:string;
    color:string;
    seating:number;
    gears:number;

    constructor(make:string,model:string,color:string,seating:number,gears:number){
            this.Maker=make;
            this.Model=model;
            this.color=color;
            this.seating=seating;
            this.gears=gears;
    }
/*
    checkBluetooth():string{
        return "Bluetooth facility is available";
    }
    checkAC():string{
        return "AC is available";
    }
    checkPowerWindows():string{
        return "Power Windows feature is Available";
    }
    */
}

class Maruti extends Car implements Icar{
    constructor(make:string,model:string,color:string,seating:number,gears:number){
        super(make,model,color,seating,gears);
       
    }
    checkBluetooth():string{
        return "Bluetooth facility is Not available";
    }
    checkAC():string{
        return "AC is available";
    }
    checkPowerWindows():string{
        return "Power Windows feature is Not Available";
    }
}

class Toyota extends Car implements Icar{
    constructor(make:string,model:string,color:string,seating:number,gears:number){
        super(make,model,color,seating,gears);
       
    }
    checkBluetooth():string{
        return "Bluetooth facility is Not available";
    }
    checkAC():string{
        return "AC is Not available";
    }
    checkPowerWindows():string{
        return "Power Windows feature is  Available";
    }

}
var marutiObj = new Maruti(
    "Maruti Suzuki",
    "Sports",
    "Red",
    5,
    5,
    );

    var toyotaObj = new Maruti(
        "Toyota Liva",
        "Sports",
        "Green",
        5,
        5,
        );

console.log(marutiObj);
console.log(marutiObj.checkBluetooth());
console.log(marutiObj.checkAC());
console.log(marutiObj.checkPowerWindows());

console.log("-------------------------------------------------------------------------------------")

console.log(toyotaObj);
console.log(toyotaObj.checkBluetooth());
console.log(toyotaObj.checkAC());
console.log(toyotaObj.checkPowerWindows());





