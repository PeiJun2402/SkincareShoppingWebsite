
// navBar function
import {  cartItem } from './js_modules/cartItem.js';
import { cartBtn } from './js_modules/cartBtn.js';
import {  countingSquare } from './js_modules/countingSquare.js';
import {  navBtn } from './js_modules/navBtn.js';  //for mobile device

//product function 
import { dropDown } from './js_modules/dropdown.js';
import { menuBtnApp } from './js_modules/menuBtn.js';
import { addBtn } from './js_modules/addBtn.js';




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
dropDown();
menuBtnApp();
addBtn();
cartBtn();
countingSquare();



