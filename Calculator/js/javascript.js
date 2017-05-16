var mybtn =  document.getElementsByClassName("cbutton");
var myOutput = document.getElementById("output");
console.log(mybtn);
var savedValue=0;
var myCal = '';
var equallFlage = false;
for(var i=0;i<mybtn.length;i++){
    
    mybtn[i].addEventListener("click" , function(){
        var myValue = this.innerHTML;
        if(equallFlage || myCal =="0"){
        
            myCal='';
            equallFlage =false;
        }
        if(myValue == "="){
             myCal += "="+eval(myCal);
            equallFlage = true;
        }else if(myValue == "CLR"){
            myCal=0;
            equallFlage=true;
        }else if(myValue == "CPY"){
            var ind = myOutput.innerHTML.indexOf("=");
            if(ind == -1)
                savedValue = myOutput.innerHTML;
            else
                savedValue = myOutput.innerHTML.substr(ind+1);
        }else if(myValue == "PST"){
            myCal+=savedValue;
        }
        else{
             myCal += myValue;
        }
       
        myOutput.innerHTML = myCal;
    });
}