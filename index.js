let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
//increment passenger by one
function increment() {
    count += 1
    countEl.textContent = count
}
//save curent batch
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
