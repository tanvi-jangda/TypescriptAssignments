function Summation(myArray:number[]):number{
var sum:number=0;
    for(var cnt=0;cnt<myArray.length;cnt++)
    {
    sum=sum+myArray[cnt];
    }
    return sum;
}
var sum:number=0;
var inputArray:number[]=[23,6,7,4,5,7];
sum=Summation(inputArray);
console.log("Addition is "+sum);