// write js code here corresponding to matches.html
var arr1 = JSON.parse(localStorage.getItem("schedule"))
var arr2 =  (JSON.parse(localStorage.getItem("favourites")) || [])
displaydata(arr1)
function displaydata(arr1){
    //console.log(arr1)
    document.querySelector("tbody").innerHTML = ""
    arr1.forEach(function(ele){
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
        td6.innerText = "Favourites"
        td6.style.color ="green"
        td6.addEventListener("click",function(){
            favorite(ele)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)
    })
}
function favorite(ele){
    arr2.push(ele)
    //console.log(arr2)
    localStorage.setItem("favourites",JSON.stringify(arr2))
}
function filter(){
    var f = document.querySelector("#filterVenue").value 
    var fd = arr1.filter(function(ele){
        return ele.place == f
    })
    //console.log(fd)
    displaydata(fd)
}
