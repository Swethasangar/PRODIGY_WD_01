const sidenav = document.getElementById("navbar")
const closenav = document.getElementById("close-nav")
const menuicon = document.getElementById("menuicon")

menuicon.addEventListener("click",()=>{
    sidenav.style.left=0
})
closenav.addEventListener("click",()=>{
    sidenav.style.left="-50%"
})