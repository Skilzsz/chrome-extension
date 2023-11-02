// logic for radio buttons in popup
// document.addEventListener('DOMContentLoaded', () => {
    const onButton = document.querySelector("#button-on")
    const offButton = document.querySelector("#button-off")
    const happyWill = document.querySelector("#happy")
    const angryWill = document.querySelector("#angry")

    angryWill.style.display = "none"

    // use chrome api to load state of popup buttons from last time they were changed
    chrome.storage.local.get(["switchState"], (result) => {
        console.log(result.switchState);
        if (result.switchState === 'on') {
            onButton.checked = true;
            happyWill.style.display = "block"
            angryWill.style.display = "none"
        } else {
            offButton.checked = true;
            happyWill.style.display = "none"
            angryWill.style.display = "block"
        }
    })

    // when buttons change state, hide other picture and set state in chrome storage
    onButton.addEventListener("change", () => {
        if (onButton.checked) {
            happyWill.style.display = "block"
            angryWill.style.display = "none"
            chrome.storage.local.set({switchState: "on"}) //.then(() => {console.log(value)})
            setTimeout(location.reload(), 0); // try ot get page to reload but not working
        }  
        
    })

    offButton.addEventListener("change", () => {
        if (offButton.checked) {
            happyWill.style.display = "none"
            angryWill.style.display = "block"
            chrome.storage.local.set({switchState: "off"})
            setTimeout(location.reload(), 0);
        }
        
    })
// })