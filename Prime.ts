//function to check the number is prime or not
function ChkPrime(num1:number)
{
    var flag:boolean=false;
    for (var i = 2; i <= num1 / 2; ++i) {
        if (num1 % i == 0) {
          flag = true;
          break;
        }
      }
      if (flag == false)
    console.log("It is a prime number");
    else
    console.log("It is not a prime number");
}

ChkPrime(2);