// defining some basic variables 

const time = document.getElementById('clock');

const audio = new Audio("Assets/Trap-Dum-Dee-Dum.mp3");
audio.loop = true;
let alarmTime = null;
let alarmTimeOut = null;

// display clock 
function updateTime(){
    
const date = new Date();

const hour = formateTime(date.getHours());

const minute = formateTime(date.getMinutes());

const seconds = formateTime(date.getSeconds());

// displaying time on screen 
time.innerHTML = hour +" : "+minute+" : "+seconds;

}

// function to display the time in double digit 

function formateTime(time){

    if(time < 10){
        return "0"+time;
    }

    return time;
}


setInterval(updateTime,1000);



// function to set alarm 

function setAlarmTime(value){
    alarmTime = value;
    alert(value);
}


function setAlarm(){

    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);


        if(timeToAlarm > current){
            const timeout = timeToAlarm.getTime() - current.getTime();

            alarmTimeOut = setTimeout(function(){
                audio.play();
            } , timeout);
        }



    }



    alert("Alarm Set");     
}



// function to clear alarm 

function clearAlarm(){

    audio.pause();

    if(alarmTimeOut){
        clearTimeout(alarmTimeOut);
        alert("Alarm Cleared !");
    }
}

