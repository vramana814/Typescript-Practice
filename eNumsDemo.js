var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 0] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 1] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 2] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 3] = "Thursday";
    WeekDays[WeekDays["Friday"] = 4] = "Friday";
    WeekDays[WeekDays["Saturday"] = 5] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 6] = "Sunday";
})(WeekDays || (WeekDays = {}));
var Status;
(function (Status) {
    Status[Status["success"] = 101] = "success";
    Status[Status["failure"] = 102] = "failure";
})(Status || (Status = {}));
var employeeDetails = /** @class */ (function () {
    function employeeDetails() {
    }
    return employeeDetails;
}());
var empObj = new employeeDetails();
empObj.ID = 101;
empObj.Name = "Venkat";
empObj.dayOff = WeekDays.Saturday;
empObj.status = Status.failure;
console.log(empObj);
