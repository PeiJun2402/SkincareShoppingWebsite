
// navBar function
import {  cartItem } from './js_modules/cartItem.js';
import { cartBtn } from './js_modules/cartBtn.js';
import {  countingSquare } from './js_modules/countingSquare.js';
import {  navBtn } from './js_modules/navBtn.js';  //for mobile device

//recod product function
import { recomCard } from './js_modules/recomCard.js';
import { addBtn } from './js_modules/addBtn.js';
import { arrowBtnApp } from './js_modules/arrowBtn.js';

//info function
import { attachInfoBtnListeners } from './js_modules/clickInfo.js';




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
        nav.classList.remove("nav-square");
        nav.classList.add("nav-square-fixed");
    

    }else{
        nav.classList.remove("nav-square-fixed");
        nav.classList.add("nav-square");


    }
   

})

navBtn()
attachInfoBtnListeners();
arrowBtnApp();

addBtn();
recomCard();
cartBtn();
countingSquare();



