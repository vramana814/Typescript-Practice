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
var Person = /** @class */ (function () {
    function Person(id, name, address, contact) {
        this.ID = id;
        this.Name = name;
        this.Address = address;
        this.Contact = contact;
    }
    return Person;
}());
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(id, name, address, contact, clSection, grade) {
        var _this = _super.call(this, id, name, address, contact) || this;
        _this.classSection = clSection;
        _this.Grade = grade;
        return _this;
    }
    student.prototype.getStudentDetails = function () {
        return this.ID + " " + this.Name + "" + this.Address + "" + this.Contact + "" + this.classSection + "" + this.Grade;
    };
    return student;
}(Person));
var staff = /** @class */ (function (_super) {
    __extends(staff, _super);
    function staff(id, name, address, contact, salary, dept, qual) {
        var _this = _super.call(this, id, name, address, contact) || this;
        _this.Salary = salary;
        _this.Department = dept;
        _this.Qualification = qual;
        return _this;
    }
    staff.prototype.getStaffDetails = function () {
        return this.ID + " " + this.Name + "" + this.Address + "" + this.Contact + "" + this.Salary + "" + this.Department + "" + this.Qualification;
    };
    return staff;
}(Person));
var teachingStaff = /** @class */ (function (_super) {
    __extends(teachingStaff, _super);
    function teachingStaff(id, name, address, contact, salary, dept, qual, sub) {
        var _this = _super.call(this, id, name, address, contact, salary, dept, qual) || this;
        _this.subject = sub;
        return _this;
    }
    teachingStaff.prototype.getTeachingStaffDetails = function () {
        return this.ID + " " + this.Name + "" + this.Address + "" + this.Contact + "" + this.Salary + "" + this.Department + "" + this.Qualification + "" + this.subject;
    };
    return teachingStaff;
}(staff));
//creating student object by calling the constructor
var studentObj = new student(101, "Kumar", "Hyd", "998912356", "5A", "A+");
console.log(studentObj);
var staffObj = new staff(1001, "S Kumar", "Chennai", "9885123123", 12000, "Science", "Msc");
console.log(staffObj);
var teachingObj = new teachingStaff(1001, "S Kumar", "Chennai", "9885123123", 12000, "Science", "Msc", "Biology");
console.log(teachingObj);
