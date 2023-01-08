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


 // grid data------------
 let movieDatabase = [
        {
            name: "Thor: Love and Thunder" ,
            releseDate:"10 july 2022",
            img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/8295/1328295-h-b05c8156e59a" ,
            imd: 8.1,
        },
        {
            name: "Doctor Strange in the Multiverse of Madness" ,
            releseDate:"22 april 2022",
            img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/9939/1279939-h-3be10a34342b" ,
            imd: 8.0,
        },
        {
            name: "Eternals" ,
            releseDate:"18 October 2021",
            img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/87/1100087-h-70e9725e4a9b" ,
            imd: 6.8,
        },
    
    
    
        {
            name: "Shang-Chi and The Legend of The Ten Rings" ,
            releseDate:"2 September 2021",
            img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8722/1078722-h-82919d0d3c64" ,
            imd: 7.4,
        }, {
            name: "Avengers: Endgame" ,
            releseDate:"26 April 2019",
            img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5061/675061-h" ,
            imd: 9.8,
        },
        {
            name: "Avengers: Infinity War" ,
            releseDate:"27 April 2018",
            img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5170/675170-h" ,
            imd: 9.1,
        },
    
    
        {
            name: "Guardians of the Galaxy" ,
            releseDate:"8 August 2014 ",
            img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4846/674846-h" ,
            imd: 8.0,
        }, {
            name: "Black Panther" ,
            releseDate:"14 February 2018",
            img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5029/675029-h" ,
            imd: 7.8,
        },
        {
            name: "Captain America: The Winter Soldier" ,
            releseDate:"4 April 2014",
            img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4857/674857-h" ,
            imd: 7.8,
        },
    
    ]


//click to href
document.querySelector("#serch").addEventListener("click",()=>{
    document.location.href = "serch.html"
})

// slideshow
const slidshow =()=>{

let div = document.querySelector("#slider")

div.style.boxShadow ="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";


let img = slide_movieData

let i =0
let image = document.createElement("img")
image.style.width = "100%"
image.src = img[i]
div.append(image)

i++
let time = setInterval(()=>{

    if(i==4){
        i=1
    }
    image.src = img[i]
    div.append(image)
    i++
    

    },2000)

}
slidshow()


//data




// sorting-------------------------------------

//low to high
let low = document.querySelector("#low")
low.addEventListener("click",function(){

movieDatabase.sort((a,b)=>{
if(a.imd > b.imd) return 1;
if(a.imd < b.imd) return -1;
return 0

})
Display(movieDatabase)

})

// high to low

let high = document.querySelector("#high")
high.addEventListener("click",()=>{

movieDatabase.sort((a,b)=>{
if(a.imd > b.imd) return -1;
if(a.imd < b.imd) return 1;
return 0

})
Display(movieDatabase)
})

// movies grid-------------------------------------------------

const Display=(movieDatabase)=>{
let loader = document.querySelector("#movies")
loader.innerHTML = null

movieDatabase.map((ele)=>{


let div = document.createElement("div")

let img = document.createElement("img")
img.src = ele.img
img.style.width = "100%"

let name = document.createElement("h2")
name.innerText = ele.name
name.style.marginBottom = "10px"

let date = document.createElement("p")
date.innerText = `Relese Date : ${ele.releseDate}`

let rate = document.createElement("p")
rate.innerText = `Rating : ${ele.imd}`


let i = document.createElement("i")
i.setAttribute("class", "material-icons")
i.style.fontSize = "15px"
i.style.color = "yellow"
i.innerText = "star_rate"
i.style.marginLeft = "5px"
rate.append(i)

div.append(img,name,date,rate)
document.querySelector("#movies").append(div)
})

}


// Display(movieDatabase)

// promice to data after 3 sec

let Getdata = new Promise((resolve,reject)=>{

setTimeout(()=>{

    let data = movieDatabase

    if(data != null){
        resolve(data)
    }else{
        reject("404 server issue")
    }


},2000)

})


Getdata.then((res)=>{

Display(res)

}).catch((err)=>{
console.log(err)
})

