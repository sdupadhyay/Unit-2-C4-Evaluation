// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",start)
var arr = (JSON.parse(localStorage.getItem("schedule")) || [])
function start(){
    event.preventDefault()
    var obj = {
        number:masaiForm.matchNum.value,
        team:masaiForm.teamA.value,
        team1:masaiForm.teamB.value,
        date:masaiForm.date.value,
        place:masaiForm.venue.value,
    }
    arr.push(obj)
    //console.log(arr)
    localStorage.setItem("schedule",JSON.stringify(arr))
}