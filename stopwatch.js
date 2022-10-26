
let hr=0;
let min=0;
let sec=0;
let count=0;

let timer=false;

function start(){
    timer=true;
    stopwatch();
}

function stop(){
    timer=false;
}

function reset(){
    timer=false;
       
        document.getElementById("count").innerHTML="00";
        document.getElementById("sec").innerHTML="00";
        document.getElementById("min").innerHTML="00";
        document.getElementById("hr").innerHTML="00";
}

function stopwatch(){
    
    let hrString=hr;
    let minString=min;
    let secSrtring=sec;
    let countString=count;
    
    if(timer==true){
        count++;
        if(count==100)
        {
            sec++;
            count=0;
        }

        if(sec==60)
        {
            min++;
            sec=0;
        }

        if(min==60)
        {
            hr++;
            min=0;
            sec=0;
        }

        if(hr<10){
            hrString="0"+hrString;
        }

        if(min<10){
            minString="0"+minString;
        }
        if(sec<10){
            secSrtring="0"+secSrtring;
        }
        if(count<10){
            countString="0"+countString;
        }
        document.getElementById("count").innerHTML=countString;
        document.getElementById("sec").innerHTML=secSrtring;
        document.getElementById("min").innerHTML=minString;
        document.getElementById("hr").innerHTML=hrString;
       setTimeout("stopwatch()", 10);
    }
}