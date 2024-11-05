import { purchasingData } from './purchasingData.js';

export function addBtn(){

    document.body.addEventListener("click", function(e) {

       

        if (e.target.classList.contains("addProductBtn")) {
            const addBtnID = Number(e.target.id);
            
            purchasingData(addBtnID);
         
          
        }
      });



}