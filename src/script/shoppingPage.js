
// navBar function
import {  cartItem } from './js_modules/cartItem.js';
import { cartBtn } from './js_modules/cartBtn.js';
import {  countingSquare } from './js_modules/countingSquare.js';
import {  navBtn } from './js_modules/navBtn.js';  //for mobile device

import {  nextBtn } from './js_modules/nextBtn.js';



window.addEventListener("load",function(){
    const getData = localStorage.getItem("product");
    const cartItemData = JSON.parse(getData);
    if(cartItemData !== null){
        cartItem(".totalDoller",".quantityNumber");

    }
})

navBtn();
cartBtn();
nextBtn();
countingSquare ();
cartItem(".totalDoller1",".quantityNumber1");



