
let timeElement = document.getElementById('time')
function displayTime() {
    let time = new Date()
    let utcTime = time.toUTCString()
    timeElement.textContent = utcTime
}
displayTime()