
// const audioClick = 'https://www.myinstants.com/en/instant/adventure-time-finn-screaming-/?utm_source=copy&utm_medium=share';
// audioClick.play();
document.addEventListener('click', () => {
    newAudio = document.createElement("audio")
    newAudio.src = "https://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/theygotcha.ogg"
    newAudio.setAttribute('id','myaudio')
    document.querySelector('body').prepend(newAudio);
    newAudio.play();
})
// https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg
// const audioSpace = new Audio(`Audio file`);
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        newAudio = document.createElement("audio")
        newAudio.src = "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"
        newAudio.setAttribute('id','myaudio')
        document.querySelector('body').prepend(newAudio);
        newAudio.play();
    }
})

// const audioEnter = new Audio(`Audio file`);
document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') { 
    newAudio = document.createElement("audio")
    newAudio.src = "https://commondatastorage.googleapis.com/codeskulptor-assets/jump.ogg"
    newAudio.setAttribute('id','myaudio')
    document.querySelector('body').prepend(newAudio);
    newAudio.play();}
})

// const audioShift = new Audio(`Audio file`);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') {
        newAudio = document.createElement("audio")
        newAudio.src = "https://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav"
        newAudio.setAttribute('id','myaudio')
        document.querySelector('body').prepend(newAudio);
        newAudio.play();
    }
})

// const audioShift = new Audio(`Audio file`);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        newAudio = document.createElement("audio")
        newAudio.src = "https://drive.google.com/file/d/1CjUisAS4nec5yMAP2b_VLZxzL_q2XD5R/view?usp=drive_link"
        newAudio.setAttribute('id','myaudio')
        document.querySelector('body').prepend(newAudio);
        newAudio.play();
    }
})





// audioYell = document.createElement("audio")
// audioYell.src = 'https://www.myinstants.com/en/instant/adventure-time-finn-screaming-/?utm_source=copy&utm_medium=share'
// audioYell.setAttribute('id','audioYell')
// document.querySelector('body').prepend(audioYell);
// audioYell.play()
// {/* <audio controls>
//   <source src="sample.ogg" type="audio/ogg">
//   <source src="sample.mp3" type="audio/mpeg">
// </audio> */}
// audioYell.setAttribute('id','myaudio')
