var i=0;
var na = Array();
function add(){
    document.getElementById("b").innerHTML="Array : ";
    na[i]=document.getElementById("a").value;
    i++;
    document.getElementById("a").value="";
    document.getElementById("b").innerHTML+=na;
}

let t1=performance.now();
let flag=0
function beginhere() {
    var input = document.getElementById("c").value;
    
    for (i=0; i<na.length; i++)
    {
       if (na[i] == input) 
       {
          flag=1;
          break;
       }
    }
    if(flag===0)
    {
        alert("Value is not present");
    }
    else{
        alert("Value is present");
    }

 };

 let t2=performance.now();

 let time=t2-t1;

const timeComplexity= document.getElementById("diplayTime");
showTime=timeComplexity.append(time);
timeComplexity.write=`${showTime}ms`;