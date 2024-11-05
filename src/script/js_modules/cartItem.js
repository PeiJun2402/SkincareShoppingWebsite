import { displayItemCard, displayTable } from './displayItemCard.js';

export function cartItem(dollerClassname,quantityClassname){
    //【CATCH】 html element
    const listTable = document.querySelector(".listTable");
    const totalDoller = document.querySelector(dollerClassname);
    const quantityNumber = document.querySelector(quantityClassname);
    
    //【CATCH】 localstage data
    const cartItemData = localStorage.getItem("product");
    const cartItems = JSON.parse(cartItemData);

    //【LOGIC】 display HTMLcode address + add total number
    const itemHTML = cartItems.map((cartItem)=>{
        return displayItemCard(cartItem);

    })

    const totalDollerHTML = cartItems.reduce((acc,cartItem)=>{return acc+(cartItem.price * cartItem.quantity)},0)
    const quantityNumberHTML= cartItems.reduce((acc,cartItem)=>{return acc+cartItem.quantity},0)

    //MERGE
    const cartItemHTML =  displayTable() + itemHTML.join('');
    listTable.innerHTML=cartItemHTML;
    totalDoller.innerHTML=totalDollerHTML;



    //【VIEW】 shopping cart qty display or not
    if(  quantityNumberHTML === 0 ){
        quantityNumber.style.visibility = 'hidden';
    }else{
        quantityNumber.style.visibility = 'visible';
        quantityNumber.innerHTML=quantityNumberHTML;

    }

}