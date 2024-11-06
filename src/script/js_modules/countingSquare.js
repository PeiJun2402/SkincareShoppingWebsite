import {  cartItem } from './cartItem.js';

export function countingSquare(){

    //【CATCH】 html element
    const cleanBtn = document.querySelector(".countingSquare .cleanBtn");
    const shoppingBtn = document.querySelector(".countingSquare .shoppingBtn");

    //【LOGIC】
    cleanBtn.addEventListener("click",function(){
        const itemJSON =JSON.stringify([]);
        localStorage.setItem("product",itemJSON);
        cartItem(".totalDoller",".quantityNumber");
    })

    shoppingBtn.addEventListener("click",function(){
        location.href='./shoppingPage.html'
    })

}