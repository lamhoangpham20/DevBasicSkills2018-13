function Combination()
{
    var n = document.getElementById('nC').value;
    var k = document.getElementById('kC').value;
    if (n > k)
    {
    var x = n - k ;
    for(let i = x-1; i >= 1; i--)
    {
        x = x * i ;   
    } 
    for(let i = n-1; i >= 1; i--)
    {
      n = n * i ;   
    }  
    for(let i = k-1; i >= 1; i--)
    {
        k = k * i ;   
    } 
    var result = n / (k * x);
    document.getElementById('result1').innerHTML= result;
}
if (n = k)
{
    for(let i = n-1; i >= 1; i--)
    {
      n = n * i ;   
    }  
    for(let i = k-1; i >= 1; i--)
    {
        k = k * i ;   
    } 
    var result = n / k;
    document.getElementById('result1').innerHTML= result;
}

}

function Permutation1()
{
    var n = document.getElementById('nP').value;
    var k = document.getElementById('kP').value;
    if (n > k)
    {
        var x = n - k;
    for(let i = n-1; i >= 1; i--)
    {
      n = n * i ;   
    }  
    for(let i = x-1; i >= 1; i--)
    {
        x = x * i ;   
    } 
    var result = n / x ;
    document.getElementById('result2').innerHTML= result; 
}
    if (n = k)
    {
        for(let i = n-1; i >= 1; i--)
    {
      n = n * i ;   
    }  
    var result = n ;
    document.getElementById('result2').innerHTML= result;
    }
}

function Permutation2()
{
    var n = document.getElementById('nA').value;
    var k = document.getElementById('kA').value;
    var a = n;
    if (n >= k)
    {
    for (i=1 ; i<k; i++)
        {
            n=n*a;
        }
    var result = n ;
    document.getElementById('result3').innerHTML= result;
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

