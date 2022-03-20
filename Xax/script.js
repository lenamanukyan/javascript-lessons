

let userNumber = document.querySelector('.user');
let text = document.querySelector('#result');
let robot = document.querySelector("#robotText");
let userText = document.querySelector("#userText")

function buttonClick(){
    function rondomeNomber(max) {
        let n = Math.random() * max;
        return Math.floor(n);
    }
    let robotNumber = rondomeNomber(100);
    console.log(robotNumber)

    if(userNumber.value > robotNumber ){
        text.innerHTML = "Հաղթեցիք"
    } else if(userNumber.value == robotNumber){
        text.innerHTML = "Հավասար"
    } else {
        text.innerHTML = "Պարտվեցիք"
    }

    robot.innerHTML = robotNumber;
    userText.innerHTML = userNumber.value;
}


