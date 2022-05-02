// write js code here corresponding to favourites.html
var fav = JSON.parse(localStorage.getItem("favourites"))
//console.log(fav)
displaydata(fav)
function displaydata(fav){
    fav.forEach(function(ele,ind){
        var tr = document.createElement("tr")
        var td1 = document.createElement("td")
        td1.innerText = ele.number
        var td2 = document.createElement("td")
        td2.innerText = ele.team
        var td3 = document.createElement("td")
        td3.innerText = ele.team1
        var td4 = document.createElement("td")
        td4.innerText = ele.date
        var td5 = document.createElement("td")
        td5.innerText = ele.place
        var td6 = document.createElement("td")
        td6.innerText = "Delete"
        td6.addEventListener("click",function(){
            del(ele,ind)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
    
}
function del(ele,ind){
fav.splice(ind,1)
//console.log(fav)
localStorage.setItem("favourites",JSON.stringify(fav))
window.location.reload()
}