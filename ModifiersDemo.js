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
var Parent = /** @class */ (function () {
    function Parent(a, b, c) {
        this.var1 = a;
        this.var2 = b;
        this.var3 = c;
    }
    return Parent;
}());
var child = /** @class */ (function (_super) {
    __extends(child, _super);
    function child(a, b, c, d) {
        var _this = _super.call(this, a, b, c) || this;
        _this.childVar = d;
        return _this;
    }
    return child;
}(Parent));
var parentObj = new Parent(101, "abc", 123);
console.log(parentObj);
var childObj = new child(1001, "Swaroop", 123, 999);
console.log(childObj);
