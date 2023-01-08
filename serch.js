// slide poster data---------------
let slide_movieData = [ 
    
    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_LOTRROP_No1NewEpisodeFridays/8127f71a-196e-4def-9fae-860327c1eb29._UR3000,600_SX3000_FMwebp_.jpeg"
,

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_FantasticBeastsS3_Launch/d734cee8-defd-41cc-bd68-1bfdc4eb4929._UR3000,600_SX3000_FMwebp_.jpeg"
,

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_TVOD_TopGunMaverick/2b8ef907-7906-4b01-b9a1-a658072d7b9a._UR3000,600_SX3000_FMwebp_.jpeg"
,

    "https://m.media-amazon.com/images/S/sonata-images-prod/PV_IN_CROW_UN_TOTWalkingDead_AP/e26a88db-3d18-4f09-ac19-ae6b1fdbf6d2._UR3000,600_SX3000_FMwebp_.jpeg"


]

// slideshow
const slidshow = () =>{

    let div = document.querySelector("#slider")
    
    div.style.boxShadow ="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
    
    
    let img = slide_movieData
    
    let i =0
    let image = document.createElement("img")
    image.style.width = "100%"
    image.src = img[i]
    div.append(image)
    
    i++
    let time = setInterval(function(){
    
        if(i==4){
            i=1
        }
        image.src = img[i]
        div.append(image)
        i++
        
    
        },2000)
    
    }
    slidshow()
    



let loader
const serch = async () =>{

    loader = document.querySelector("#movies")
    let load = document.createElement("img")
    load.src = "https://images.pling.com/img/00/00/55/86/05/1496539/865d4f8293ce7177e222bd4f52a814c5e5505f07e0dbcb8b49c8b318d73cfcbfc47d.gif"
    loader.append(load)

    //you need collection of movie key = af2d5379
    try{

        //serch value
        let quarr = document.querySelector("#quarry").value
        if(quarr==0){
            loader.innerHTML = null
            return false

        }

        // fatching url
        // url contain apikey,and serch by quarry you want
        let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=af2d5379&s=${quarr}&plot=short`)
        // storing the data in json()
        let data = await res.json()
        console.log(data)
        // movie data 
        let actualData = data.Search
        
        Display(actualData)

        if(data == undefined){
            return false
        }


    }
    catch(err){
        console.log(`error-${err}`)
        loader.append(load)
    }

    

}
const home =()=>{

    document.location.href = "index.html"
}
const more =()=>{
    document.location.href = "details.html"
}

const construct=(i,t,d,ti)=>{
    this.img = i
    this.title = t
    this.date = d
    this.type = ti

}

let arr = JSON.parse(localStorage.getItem("details")) || []

const Display =(movieDatabase)=>{
    
    
    loader.innerHTML = null
    movieDatabase.map((ele)=>{
    
    

    let div = document.createElement("div")
    div.addEventListener("click",()=>{
        console.log("hii")
        let obj = new construct(ele.Poster,ele.Title,ele.Year,ele.Type)
        arr.push(obj)
        localStorage.setItem("details",JSON.stringify(arr))

    })
    div.style.cursor = "pointer"
   

    let img = document.createElement("img")
    img.src = ele.Poster
    img.style.width = "100%"

    let name = document.createElement("h2")
    name.innerText = ele.Title
    name.style.marginBottom = "10px"

    let date = document.createElement("p")
    date.innerText = `Relese Date : ${ele.Year}`

    let rate = document.createElement("p")
    rate.innerText = `Type : ${ele.Type}`

    div.append(img,name,date,rate)
    document.querySelector("#movies").append(div)
    })

}

// debounce 
let id
const debounce =(fun,dlay)=>{

    // this condition debounce previes serch quarries
    if(id){
        clearTimeout(id);
    }

    id = setTimeout(()=>{

        fun() //serch() function
    },dlay)
}