let details = JSON.parse(localStorage.getItem("details"))

function Display(movieDatabase){
    
   
    movieDatabase.map(function(ele){
    
    

    let div = document.createElement("div")
   
    let img = document.createElement("img")
    img.src = ele.img
    img.style.width = "100%"

    let name = document.createElement("h2")
    name.innerText = ele.title
    name.style.marginBottom = "10px"

    let date = document.createElement("p")
    date.innerText = `Relese Date : ${ele.date}`

    let rate = document.createElement("p")
    rate.innerText = `Type : ${ele.type}`

    div.append(img,name,date,rate)
    document.querySelector("#movies").append(div)
    })

}

Display(details)

function home(){

    document.location.href = "index.html"
}
function serch(){
    document.location.href = "serch.html"
}