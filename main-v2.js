document.addEventListener('click', () => {
    let audio = new Audio (chrome.runtime.getURL("audio/click.wav"))
    audio.play()
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        let audio = new Audio (chrome.runtime.getURL("audio/space.wav"))
        audio.play()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') { 
        let audio = new Audio (chrome.runtime.getURL("audio/enter.wav"))
        audio.play()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'c' && e.metaKey) { 
        let audio = new Audio (chrome.runtime.getURL("audio/chocolate-rain.wav"))
        audio.play()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'v' && e.metaKey) { 
        let audio = new Audio (chrome.runtime.getURL("audio/some-stay-dry.wav"))
        audio.play()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowUp' && e.metaKey) { 
        let audio = new Audio (chrome.runtime.getURL("audio/rickroll.wav"))
        audio.play()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Shift') { 
        let audio = new Audio (chrome.runtime.getURL("audio/shift.wav"))
        audio.play()
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        newAudio = document.createElement("audio")
        newAudio.src = "https://drive.google.com/file/d/1CjUisAS4nec5yMAP2b_VLZxzL_q2XD5R/view?usp=drive_link"
        newAudio.setAttribute('id','myaudio')
        document.querySelector('body').prepend(newAudio);
        newAudio.play();
    }
})

let arcade = new Audio (chrome.runtime.getURL("audio/click.wav"))
document.addEventListener('DOMContentLoaded', arcade.play())




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
