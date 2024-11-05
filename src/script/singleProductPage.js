
// navBar function
import { cartBtn } from './js_modules/cartBtn.js';
import {  cartItem } from './js_modules/cartItem.js';
import {  countingSquare } from './js_modules/countingSquare.js';
import {  navBtn } from './js_modules/navBtn.js';  //for mobile device

// product purchase
import { addProductBtn } from './js_modules/addProductBtn.js';
import { productBtn } from './js_modules/productBtn.js';
import { singleProduct } from './js_modules/singleProduct.js';

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
        nav.classList.add("nav-square-fixed");
    

    }else{
        nav.classList.remove("nav-square-fixed");

    }
   

})

navBtn();
cartBtn();
countingSquare();

addProductBtn();
productBtn();
singleProduct();

attachInfoBtnListeners();