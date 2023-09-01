let val=0;

function btnclick(num)
{
 document.getElementById("screen").value+=num;

}
function clearDis()
{
    document.getElementById("screen").value="";
}

function result()
{
 let text=document.getElementById("screen").value;
 let result=eval(text);
 document.getElementById("screen").value=result;

}