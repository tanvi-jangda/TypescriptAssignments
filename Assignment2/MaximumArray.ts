function Maximum(myArray:number[]):number
{
    var max=myArray[0];
for(var cnt=1;cnt<myArray.length;cnt++)
{
    if(max < myArray[cnt])
    {
        max=myArray[cnt];
    }
}
return max;
}

var maxArrayElement:number=0;
var inputArray:number[]=[23,89,6,29,56,45,77,32];

maxArrayElement=Maximum(inputArray);
console.log("Maximum number is "+maxArrayElement);