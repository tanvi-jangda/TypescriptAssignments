//function to calculate are of circle using default paramter type
function Area(radius: number, PI:number=3.14):number{
var areaOfCircle:number=0;
areaOfCircle=PI*radius*radius;
return areaOfCircle;
}

//function calling
var area=Area(5);
//print the area of circle
console.log("Area of circle is "+area);