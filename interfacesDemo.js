var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(make, model, color, seating, gears) {
        this.Maker = make;
        this.Model = model;
        this.color = color;
        this.seating = seating;
        this.gears = gears;
    }
    return Car;
}());
var Maruti = /** @class */ (function (_super) {
    __extends(Maruti, _super);
    function Maruti(make, model, color, seating, gears) {
        return _super.call(this, make, model, color, seating, gears) || this;
    }
    Maruti.prototype.checkBluetooth = function () {
        return "Bluetooth facility is Not available";
    };
    Maruti.prototype.checkAC = function () {
        return "AC is available";
    };
    Maruti.prototype.checkPowerWindows = function () {
        return "Power Windows feature is Not Available";
    };
    return Maruti;
}(Car));
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(make, model, color, seating, gears) {
        return _super.call(this, make, model, color, seating, gears) || this;
    }
    Toyota.prototype.checkBluetooth = function () {
        return "Bluetooth facility is Not available";
    };
    Toyota.prototype.checkAC = function () {
        return "AC is Not available";
    };
    Toyota.prototype.checkPowerWindows = function () {
        return "Power Windows feature is  Available";
    };
    return Toyota;
}(Car));
var marutiObj = new Maruti("Maruti Suzuki", "Sports", "Red", 5, 5);
var toyotaObj = new Maruti("Toyota Liva", "Sports", "Green", 5, 5);
console.log(marutiObj);
console.log(marutiObj.checkBluetooth());
console.log(marutiObj.checkAC());
console.log(marutiObj.checkPowerWindows());
console.log("-------------------------------------------------------------------------------------");
console.log(toyotaObj);
console.log(toyotaObj.checkBluetooth());
console.log(toyotaObj.checkAC());
console.log(toyotaObj.checkPowerWindows());
