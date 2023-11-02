

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




