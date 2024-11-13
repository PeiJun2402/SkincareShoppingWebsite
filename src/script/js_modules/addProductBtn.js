import { purchasingProductData } from './purchasingProductData.js';

export function addProductBtn(){
    const shoppingProductBtn = document.querySelector(".shoppingProductBtn");

    shoppingProductBtn.addEventListener("click", function(e) {
        

        const addBtnID = Number(e.target.id); 
        purchasingProductData(addBtnID);

      });



}