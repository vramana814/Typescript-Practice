class Parent{
    protected var1:number;
    private var2:string;
            var3:number;

    constructor(a,b,c){
        this.var1=a;
        this.var2=b;
        this.var3=c;
    }

}

class child extends Parent{
    childVar:number;

    constructor(a,b,c,d){
        super(a,b,c);
        this.childVar=d;
    }
}
var parentObj = new Parent(101,"abc",123);
console.log(parentObj);

var childObj = new child(1001,"Swaroop",123,999);
console.log(childObj);