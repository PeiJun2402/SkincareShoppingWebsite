import {  cartItem } from './cartItem';

export function nextBtn(){

    const nextStepBtn1 = document.querySelector(".nextStep1");
    const nextStepBtn2 = document.querySelector(".nextStep2");
    const lastStep = document.querySelector(".lastStep");


    const displayItem = document.querySelector(".displayItem");
    const shippingInfo = document.querySelector(".shippingInfo");
    const tatalDetail = document.querySelector(".tatalDetail");
    const finishOrder = document.querySelector(".finishOrder");


    const prdcedureDivs = document.querySelectorAll(".prdcedure div");
    const addressInput = document.querySelector(".addressInput");
    const paymentSelect = document.querySelector(".paymentSelect");
    const paymentMethod = document.querySelector(".paymentMethod");
    const address = document.querySelector(".address");


    nextStepBtn1.addEventListener("click",function(e){
        displayItem.style.display = "none"
        shippingInfo.style.display = "block"
        tatalDetail.style.display = "block"

        cartItem(".totalDoller1",".quantityNumber1");

        prdcedureDivs.forEach((prdcedureDiv,index)=>{
            
           
            if(prdcedureDiv.className === "atStep"){
                prdcedureDiv.classList.remove("atStep");
               
            }

            if(index === 1 ){
                prdcedureDiv.classList.add("atStep");

            }

        })

    })

    nextStepBtn2.addEventListener("click",function(e){
        shippingInfo.style.display = "none"
        tatalDetail.style.display = "none"
        finishOrder.style.display = "block"

        const addressValue =addressInput.value
        const paymentValue =paymentSelect.options[paymentSelect.selectedIndex].text


        address.innerHTML = addressValue;
        paymentMethod.innerHTML = paymentValue;


        prdcedureDivs.forEach((prdcedureDiv,index)=>{
            
           
            if(prdcedureDiv.className === "atStep"){
                prdcedureDiv.classList.remove("atStep");
               
            }

            if(index === 2 ){
                prdcedureDiv.classList.add("atStep");

            }
        




        })




    })

    lastStep.addEventListener("click",function(e){
        displayItem.style.display = "block"
        shippingInfo.style.display = "none"
        tatalDetail.style.display = "none"

        prdcedureDivs.forEach((prdcedureDiv,index)=>{

            if(index === 0 ){
                prdcedureDiv.classList.add("atStep");

            }
            

            if(index === 1 ){
                prdcedureDiv.classList.remove("atStep");

            }

        })
       

    })

}

