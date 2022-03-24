function First(name,callback)
{
    console.log("Good AfterNoon"+ ' ' + name);
    callback();
}
function callMe()
{
    console.log("Hello From CallBack Function");
}
First('ABC',callMe);