let mySession = document.querySelector("#mySession");
let myHrs = document.querySelector("#myHours");
let myMins = document.querySelector("#myMinutes");
let mySecs = document.querySelector("#mySeconds");
let integerr = document.querySelector("#integer");
let switchBtn = document.querySelector(".toggler");
let myContainer = document.querySelector(".container.myOwnTime");
let realContainer = document.querySelector(".container.theRealTime");
let rotator = document.querySelector(".rotator");
let rotator1 = document.querySelector(".rotator1");
let rotator2 = document.querySelector(".rotator2");
let rotatorMe = document.querySelector(".rotatorMe");
let rotatorMe1 = document.querySelector(".rotatorMe1");
let rotatorMe2 = document.querySelector(".rotatorMe2");

let realSession = document.querySelector("#realSession");
let realHrs = document.querySelector("#realHours");
let realMins = document.querySelector("#realMinutes");
let realSecs = document.querySelector("#realSeconds");

var rotatorDefault = 45;
function secCount(seconds) {
    rotator.style.transform = `rotate(${rotatorDefault + seconds * 6}deg)`;
}


function secCount2(seconds) {
    rotatorMe.style.transform = `rotate(${rotatorDefault + seconds * 6}deg)`;
}


// hrs.innerHTML = hours;
// mins.innerHTML = minutes;
// secs.innerHTML = seconds

function timeDisplay() {



    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();



    realHrs.innerHTML = hours;
    realMins.innerHTML = minutes;
    realSecs.innerHTML = seconds

    if (hours > 11) {
        realSession.innerHTML = "PM";
    } else {
        realSession.innerHTML = "AM";
    }

    if (hours > 12) {
        hours = hours - 12;
    }

    // seconds

    if (seconds > 9) {
        realSecs.innerHTML = seconds;
    } else {
        realSecs.innerHTML = "0" + seconds;
    }

    // mins format

    if (minutes > 9) {
        realMins.innerHTML = minutes;
    } else {
        realMins.innerHTML = "0" + minutes;
    }


    //hours format

    if (hours > 9) {
        realHrs.innerHTML = hours;
    } else {
        realHrs.innerHTML = "0" + hours;
    }

    // sec code 
    secCount(seconds);


    // minutes code
    rotator1.style.transform = `rotate(${rotatorDefault + minutes * 6}deg)`;

    // hour code    
    rotator2.style.transform = `rotate(${rotatorDefault + hours * 30}deg)`;
}



setInterval(timeDisplay, 10);

// my time fuc
let secondsCount = 0;
let minutesCount = 0;
let hoursCount = 0;
let secondsCountForMinsDot = 0;
let minutesCountForHourDot = 0;


function myTimeFuc() {

    let myDateTime = new Date(2021, 0, 23, 0, 0, 0);
    let hours = myDateTime.getHours();
    let minutes = myDateTime.getMinutes();
    let seconds = myDateTime.getSeconds();

    let myTime = setInterval(function MoveTimeSecs() {


        if (seconds === 59) {

            seconds = -1;
        }

        secondsCount++;

        // integerr.innerHTML = secondsCount;
        seconds++;


        // min
        if (minutes === 60) {

            minutes = 0;
        }



        if (secondsCount === rounded(secondsCount)) {
            minutes++;
            minutesCount++;

            myMins.innerHTML = minutes;

        }

        // hrs
        if (hours === 24) {
            hours = 0;
        }

        if (secondsCount === roundedHours(secondsCount)) {
            hours++;
            hoursCount++;
            myHrs.innerHTML = hours;
        }

        // seconds format

        if (seconds > 9) {
            mySecs.innerHTML = seconds;
        } else {
            mySecs.innerHTML = "0" + seconds;
        }

        // minutes format

        if (minutes > 9) {
            myMins.innerHTML = minutes;
        } else {
            myMins.innerHTML = "0" + minutes;
        }

        // hours format

        if (hours > 9) {

            myHrs.innerHTML = hours;
        } else {
            myHrs.innerHTML = "0" + hours;
        }

        if (hours > 11) {
            mySession.innerHTML = "PM";
        } else {
            mySession.innerHTML = "AM";
        }

        secCount2(seconds)

        // minsCountfuc;

        secondsCountForMinsDot++;
        if (secondsCountForMinsDot > 3599) {
            secondsCountForMinsDot = 0
        }
        // console.log(secondsCountForMinsDot);
        rotatorMe1.style.transform = `rotate(${rotatorDefault + secondsCountForMinsDot * 0.1}deg)`;



        // hourcount 
        minutesCountForHourDot = minutes
        if (minutesCountForHourDot > 59) {
            minutesCountForHourDot = 0;
        }

        // console.log(rotator2.style.transform = `rotate(${rotatorDefault + minutesCountForHourDot * 0.5}deg)`);

        rotatorMe2.style.transform = `rotate(${rotatorDefault + minutesCountForHourDot * 0.5}deg)`;


    }, 1000);




}

let timer = myTimeFuc();




// use css to display and hide types of clock




// mulitples of a num

function rounded(num) {

    let roundedUp = Math.ceil(num / 60) * 60;

    return roundedUp;
}

function roundedHours(num) {

    return Math.ceil(num / 3600) * 3600;

}

console.log(
    rounded(60));


switchBtn.addEventListener("click", function () {
    myContainer.classList.toggle("remove");
    realContainer.classList.toggle("remove");

    rotator.classList.toggle("removeDot");
    rotator1.classList.toggle("removeDot");
    rotator2.classList.toggle("removeDot");
    rotatorMe.classList.toggle("removeDot");
    rotatorMe1.classList.toggle("removeDot");
    rotatorMe2.classList.toggle("removeDot");

});

console.log(myContainer);
console.log(realContainer);