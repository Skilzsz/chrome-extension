// logic for radio buttons in popup
document.addEventListener('DOMContentLoaded', () => {
    const onButton = document.querySelector("#button-on")
    const offButton = document.querySelector("#button-off")
    const happyWill = document.querySelector("#happy")
    const angryWill = document.querySelector("#angry")

    angryWill.style.display = "none"

    onButton.addEventListener("change", () => {
        if (onButton.checked) {
        happyWill.style = "display: block"
        angryWill.style = "display: none"
        }   
    })
    
    offButton.addEventListener("change", () => {
        if (offButton.checked) {
            happyWill.style = "display: none"
            angryWill.style = "display: block"
        }
    })
    }
)