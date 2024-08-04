let side = document.querySelector(".side-nav")
let menu = document.querySelector(".menu-btn")
side.style.right ="-250px"
menu.addEventListener("click",()=>{
    if(side.style.right =="-250px"){
        side.style.right ="0px"
    }else{
        side.style.right ="-250px"
    }
})

let password = document.querySelector("#password")
let eyeicon = document.querySelector("#eyeicon")

eyeicon.addEventListener("click",()=>{
    if(password.type=="password"){
        password.type = "text"
        eyeicon.src = "eye-icons/eye-close.png"
    }else{
        password.type = "password"
        eyeicon.src = "eye-icons/eye-open.png"
    }
})
var scroll = new SmoothScroll('a[href*="#"]');