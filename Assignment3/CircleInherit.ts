//Parent class
class Circle
{
    radius:number;
    PI:number;

    constructor(r:number)
    {
this.radius=r;
this.PI=3.14;
    }
    CalculateArea():number
    {
        let area=this.radius*this.radius*this.PI;
        return area;
    }
}

//child class
class CircleX extends Circle
{
    constructor(data:number)
    {
        //calls the parent class constructor
        super(data);
    }
    CalculateCircumference():number
    {
        let ans:number=0;
        ans = 2*this.PI*this.radius;
        return ans;
    }
}

var obj = new CircleX(10.5);
var obj2 = new CircleX(14.5);

var ret:number=0;

//using child class object we can call parent class method aswell
ret=obj.CalculateArea();
console.log("Area of circle using obj1 is "+ret);

ret=obj.CalculateCircumference();
console.log("Circumference of circle using obj1 is "+ret);
console.log();

//using child class object we can call parent class method aswell
ret=obj2.CalculateArea();
console.log("Area of circle using obj2 is "+ret);

ret=obj2.CalculateCircumference();
console.log("Circumference of circle using obj2 is "+ret);