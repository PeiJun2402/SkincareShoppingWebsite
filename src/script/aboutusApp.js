
// navBar function
import { cartBtn } from './js_modules/cartBtn.js';
import {  cartItem } from './js_modules/cartItem.js';
import {  countingSquare } from './js_modules/countingSquare.js';
import {  navBtn } from './js_modules/navBtn.js';  //for mobile device

window.addEventListener("load",function(){
    const getData = localStorage.getItem("product");
    const cartItemData = JSON.parse(getData);
    if(cartItemData !== null){
        cartItem(".totalDoller",".quantityNumber");

    }
})

const nav = document.querySelector(".nav-square");

window.addEventListener("scroll",function(){
    if(window.scrollY > nav.getBoundingClientRect().height){
        nav.classList.add("nav-square-fixed");
    

    }else{
        nav.classList.remove("nav-square-fixed");

    }
   

})

navBtn();
cartBtn();
countingSquare();
