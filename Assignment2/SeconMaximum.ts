function Maximum(myArray:number[]):number
{
    myArray.sort();
    var length=myArray.length;
    var secondMax=0;
    // for (let i = length - 2; i >= 0; i--) {
    //     if (myArray[i] != myArray[length - 1]) {
    //       secondMax = myArray[i];
    //       break;
    //     }
    //   }
      //not sure if we really need this above for loop or not
      secondMax=myArray[length-2];
return secondMax;
}
var secondMax:number=0;
var inputArray:number[]=[23,89,6,29,56,45,77,32];
secondMax=Maximum(inputArray);
console.log("Second maximum number is "+secondMax);