class Arithmetic
{
    //class properties
    num1:number;
    num2:number;

    //constructor creation
    constructor(n1:number,n2:number)
    {
    this.num1=n1;
    this.num2=n2;
    }

    //method to add 2 numbers
    Addition():number
    {
        var ans:number=0;
        ans=this.num1+this.num2;
       return ans;
    }

    //method to substract 2 numbers
    Substraction():number
    {
        var ans:number=0;
        ans=this.num1-this.num2;
       return ans;
    }

     //method to multiply 2 numbers
     Multiplication():number
     {
         var ans:number=0;
         ans=this.num1*this.num2;
        return ans;
     }

      //method to divide 2 numbers
    Division():number
    {
        var ans:number=0;
        ans=this.num1/this.num2;
       return ans;
    }
}

//object creation
var obj1= new Arithmetic(20,10);
var obj2=new Arithmetic(100,50);

var answer:number=0;

//method calling using object 1
answer = obj1.Addition();
console.log("Addition of 2 numbers using obj1 is "+answer);

answer = obj1.Substraction();
console.log("Substraction of 2 numbers using obj1  is "+answer);

answer = obj1.Multiplication();
console.log("Multiplication of 2 numbers using obj1 is "+answer);

answer = obj1.Division();
console.log("Division of 2 numbers using obj1 is "+answer);


//method calling using object 2
answer = obj2.Addition();
console.log();
console.log("Addition of 2 numbers using obj2 is "+answer);
answer = obj2.Substraction();
console.log("Substraction of 2 numbers using obj2  is "+answer);

answer=obj2.Multiplication();
console.log("Multiplication of 2 numbers using obj2 is "+answer);

answer=obj2.Division();
console.log("Division of 2 numbers using obj2 is "+answer);