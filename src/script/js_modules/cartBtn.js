import {  cartItem } from './cartItem.js';

export function cartBtn(){

    const listTable = document.querySelector(".listTable");



    listTable.addEventListener("click",function(e){ 
        //【CATCH】 localstage data
        const getData = localStorage.getItem("product");
        const cartItemData = JSON.parse(getData);

        //---------------------------------- 【LOGIC】 all shopping cart BTN function ------------------------------------------
        // ARRAY - control all data
        let cartItems =[...cartItemData];

    
        // delete button
        if(e.target.classList.contains("deleteBtn")){

            const deleteBtmID = Number(e.target.id);
            cartItems = cartItems.filter((cartItem)=>{return cartItem.id !== deleteBtmID});

        }


        // plus button
        if(e.target.classList.contains("plusBtn")){

            const plusBtmID = Number(e.target.id);
            cartItems.forEach((cartItem)=>{

                if(cartItem.id === plusBtmID){
                    cartItem.quantity++;
                }  
            });



        }


        // minus button
        if(e.target.classList.contains("minusBtn")){

            const minusBtmID = Number(e.target.id);
            cartItems.forEach((cartItem)=>{

                if(cartItem.id === minusBtmID){
                    cartItem.quantity--;
                }
            });
            cartItems = cartItems.filter((cartItem)=>{
                return !(cartItem.id === minusBtmID && cartItem.quantity === 0)});

        }

        //---------------------------------- 【LOGIC】 end  ------------------------------------------


        // 【UPLOAD】store new shopping item data
        const itemJSON =JSON.stringify(cartItems);
        localStorage.setItem("product",itemJSON);

        // 【DISPLAY】display new data
        cartItem(".totalDoller",".quantityNumber");

    

    })


}