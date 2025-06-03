
let barElement = document.querySelector(".toggle-bar");

barElement.addEventListener("click",()=>
{
    document.querySelector(".content-nav").classList.toggle("active")
})