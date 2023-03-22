//function to print fibonacci series till the given number
function Fibonnaci(num1:number)
{
    
var fibo:string;
    var t1:number = 0, t2:number = 1;
  
    
    var nextTerm = t1 + t2;
  
    fibo= t1+" "+ t2;
  
    
    for (var i = 3; i <= num1; ++i) {
     fibo= fibo+" "+ nextTerm;
      t1 = t2;
      t2 = nextTerm;
      nextTerm = t1 + t2;
    }
    console.log(fibo);
}

Fibonnaci(21);