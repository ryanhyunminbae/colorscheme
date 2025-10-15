const getBtn = document.getElementById('get-btn')
const colorPicker = document.getElementById('color-picker')
const modeType = document.getElementById('selector')
const display = document.getElementById('color-display')
const num = 5

let modeUse = JSON.parse(JSON.stringify(document.getElementById('selector').value))
let colorHex = JSON.parse(JSON.stringify(document.getElementById('color-picker').value)).slice(1,7)

modeType.addEventListener('change', function() {
    modeUse = JSON.parse(JSON.stringify(document.getElementById('selector').value))
    console.log(modeUse)
})

colorPicker.addEventListener('change', function() {
    colorHex = JSON.parse(JSON.stringify(document.getElementById('color-picker').value)).slice(1,7)
    console.log(colorHex)
})

getBtn.addEventListener('click', function() {
    console.log(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${modeUse}&count=${num}`)
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorHex}&mode=${modeUse}`, {method: "GET"})
        .then(res => res.json())
        .then(data => {
            console.log(data) 
            for (let i = 0; i < 5; i++) {
                let currentDiv = document.getElementById(`color${i}`)
                let currentColorText = document.getElementById(`color-text${i}`)
                currentDiv.style.backgroundColor = `${data.colors[i].hex.value}`
                currentColorText.innerHTML = `<p>${data.colors[i].hex.value}</p>`
            }
        })


})



