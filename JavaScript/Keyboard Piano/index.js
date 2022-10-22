function playSound(e){
    // console.log(e);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    // console.log(audio);
    // console.log(key);
    if(!audio) return; //STOP from moving further.  
    audio.currentTime = 0; //Rewind to Start.
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e) {
    // console.log(e);
    if(e.propertyName !== 'transform') return; //SKIP if it isn't a transform transition.
    // console.log(e.propertyName);
    // console.log(this);
    this.classList.remove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);
