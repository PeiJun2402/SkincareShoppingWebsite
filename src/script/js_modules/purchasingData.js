import {  localstorageData } from './localStorage.js';
import {  cartItem } from './cartItem.js';

export async function purchasingData(id){
    
    //product data
    const data = await fetch('https://raw.githubusercontent.com/PeiJun2402/ProductJson/refs/heads/main/product.json');
    const poductArrays =await data.json()

    // -----------------------【LOGIC】-------------------------------------------
    // find customer buying product data
    const addBtnData = poductArrays.find((poductArray) =>{ return id === poductArray.id})



    //改動資料格式，並放入localstorage中
    let purchasingData = "";

    if(addBtnData){
        purchasingData = {
            id:addBtnData.id,
            nameTW:addBtnData.nameTW,
            price:addBtnData.price,
            quantity:1
        }

    }else{
        purchasingData = undefined;

    } 


    localstorageData(purchasingData);




    //【VIEW】 display cart list
    cartItem(".totalDoller",".quantityNumber");
    



}
