//function to find the factors of given number
function DisplayFactors(num1: number): string{
    var factor:string='';
    for(var cnt=0; cnt<num1; cnt++)
    {
    if(num1%cnt==0)
    {
        factor= factor+" "+cnt;
    }
    }
    return factor;
}

//function call;
var factorOfNumber=DisplayFactors(20);
console.log(factorOfNumber);