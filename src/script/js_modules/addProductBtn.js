import { purchasingProductData } from './purchasingProductData.js';

export function addProductBtn(){

    document.body.addEventListener("click", function(e) {

       

        if (e.target.classList.contains("shoppingProductBtn")) {
            const addBtnID = Number(e.target.id);
            
            purchasingProductData(addBtnID);
         
          
        }
      });



}