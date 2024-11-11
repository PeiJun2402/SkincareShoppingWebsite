
import { diaplayRecomCard }from './displayCard.js'

export async function recomCard(){
    
    //product data
    const data = await fetch('https://raw.githubusercontent.com/PeiJun2402/ProductJson/refs/heads/main/product.json');
    const poductArrays =await data.json()

    //【CATCH】html element
    const cardSquare = document.querySelector(".card-square");

    //【LOGIC】
    const cardsHtml =  poductArrays.map((poductArray)=>{
        
        if(poductArray.recommend){
            return diaplayRecomCard(poductArray,"全產品")}
    });
    
    cardSquare.innerHTML= cardsHtml.join('');
    

}


