const time = new Date();
const presentTime = time.getHours();
var displayText = "hi";

if (presentTime > 4 && presentTime < 12) {
    displayText = "Good Morning!";
} else if(presentTime >= 12 && presentTime < 17){
    displayText = "Good Afternoon!";
} else{
    displayText = "Good Evening!"
}

console.log(displayText);

document.getElementById("greeting").innerHTML = displayText;