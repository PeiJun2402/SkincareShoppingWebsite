import { productCard }from './productCard.js'

export function menuBtnApp(){
    const menuBtns =document.querySelectorAll(".menuBtn")

    menuBtns.forEach((menuBtn)=>{
       menuBtn.addEventListener("click",function(){
        productCard(menuBtn.textContent);
       })

    })


}