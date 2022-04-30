// this function disables the start button after you click it. 
// as well as keeps the stop button disabled until start is clicked
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
//does the exact opposite of above function
function stop() {
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
//this function allows us to play an.mp3 file
function playSound() {
    mySound = new sound("cosmic-glow-6703.mp3");
    mySound.play();
}
//this fucntion creates and audio player we can use a button to play
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}