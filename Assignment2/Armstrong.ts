var ChkArmstrong=(num1:number)=>{
var result:number=0;
var remainder;
var originalNum = num1;

while (originalNum > 0) {
    remainder = originalNum % 10;
    result += remainder * remainder * remainder;
    originalNum =Math.floor(originalNum/10);
 }

 if (result == num1)
 console.log("It is an Armstrong number");
 else
 console.log("It is not an Armstrong number");
}
ChkArmstrong(153);