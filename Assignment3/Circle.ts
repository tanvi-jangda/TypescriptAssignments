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

var obj=new Circle(10.7);
var obj2=new Circle(15);

var ret:number=0;
ret = obj.CalculateArea();
console.log("Area of circle using obj1 is "+ret);

ret = obj2.CalculateArea();
console.log("Area of circle using obj2 is "+ret);
