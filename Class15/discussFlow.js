function printReport(x,y)
{
    console.log("Some report related data",x,y);
}
function addHeader(func,sh)
{   let a = 10;
    console.log("add header got called with header",sh);
    function proxy(p,q)
    {
        console.log(sh);
        func(p,q);
    }
    return proxy;
}
kkk=addHeader(printReport,"Gwalior report");
jjj=addHeader(printReport,"Delhi report");
kkk(1000,2000);
jjj(3000,4000);
