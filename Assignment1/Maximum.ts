//function to calculate MAximum of 3 nums
function Maximum(num1 : number,num2 :number,num3 :number):number{
    var max :number=0;
    if(num1>num2 && num1>num3){
        max= num1;
    }
    if(num2>num1 && num2>num3){
        max= num2;
    }
    else {
        max= num3;
    }
    return max;
}

var maxOfThree :number=0;
//function call
maxOfThree= Maximum(23,89,6);
console.log("Maximum number is "+maxOfThree);