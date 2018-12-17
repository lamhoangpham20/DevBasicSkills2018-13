function factorial(a)
{
    var a;
    for(let i = a-1 ; i>1; i--)
    {
        a=a*i
    }
    return a;
}
function Combination()
{
    var n = Number(document.getElementById('nC').value);
    var k = Number(document.getElementById('kC').value);
    
    if (n > k)
    {
    var x = n - k ;
    //factorial of x
    x = factorial(x);
    for(let i=n-1; i>=k+1; i--)
    {
        n=n*i;
    }
        
        var result = n/x;
    
    document.getElementById('result1').innerHTML=result;
}
if (n == k)
{
    for(let i = n-1; i >0; i--)
    {
      n = n * i ;   
    }  
    for(let i = k-1; i >0; i--)
    {
        k = k * i ;   
    } 
    var result1 = n / k;
    document.getElementById('result1').innerHTML= result1;
}

}

function Permutation1(n,k)
{
    var n = Number(document.getElementById('nP').value);
    var k = Number(document.getElementById('kP').value);
    if (n > k) 
    {
        result2 = factorial(n)/factorial(n-k);
    document.getElementById('result2').innerHTML= result2;
}
    if (n == k)
    {
        for(let i = n-1; i >0; i--)
    {
      n = n * i ;   
    }  
    var result2 = n ;
    document.getElementById('result2').innerHTML= result2;
    }
}

function Permutation2()
{
    var n = Number(document.getElementById('nA').value);
    var k = Number(document.getElementById('kA').value);
    var a = n;
    if (n >= k)
    {
    for (i=1 ; i<k; i++)
        {
            n=n*a;
        }
    var result3 = n ;
    document.getElementById('result3').innerHTML= result3;
    }
}
function Show1()
{
    document.getElementById("Show1").style.display = "block";
    document.getElementById("Show2").style.display = "none";
    document.getElementById("Show3").style.display = "none";
}
function Show2()
{
    document.getElementById("Show2").style.display = "block";
    document.getElementById("Show1").style.display = "none";
    document.getElementById("Show3").style.display = "none";
}
function Show3()
{
    document.getElementById("Show3").style.display = "block";
    document.getElementById("Show1").style.display = "none";
    document.getElementById("Show2").style.display = "none";
}
