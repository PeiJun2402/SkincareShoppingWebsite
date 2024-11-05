export function navBtn(){
    const navBtn = document.querySelector(".navBtn");
    const navMenu = document.querySelector(".menu");
    const closeBtn = document.querySelector(".closeBtn");

    navBtn.addEventListener("click",function(){
        navMenu.classList.add("open");

    })
    closeBtn.addEventListener("click",function(){
        navMenu.classList.remove("open");

    })

}