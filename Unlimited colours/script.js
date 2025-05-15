const startbutton=document.querySelector("#start")
const stopbutton=document.querySelector("#stop")


const randomcolour=function(){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
}
const changecolour= function(){
     start=setInterval(randomcolour,1000);
}
const stopchangecolour=function(){
    clearInterval(start);
}
startbutton.addEventListener("click",changecolour)

stopbutton.addEventListener("click",stopchangecolour)