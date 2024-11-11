import { diaplayRecomCard }from './displayCard.js'

export async function productCard(skintype){
    //【CATCH】 html element
    const productSquare = document.querySelector(".product-square");

    //product data
    const data = await fetch('https://raw.githubusercontent.com/PeiJun2402/ProductJson/refs/heads/main/product.json');
    const poductArrays =await data.json()
 
    const productHtml =  poductArrays.map((poductArray)=>{ 
        
        if(poductArray.skintype.includes(skintype)){
            return diaplayRecomCard(poductArray,skintype) 

        } 
        
    });
    productSquare.innerHTML= productHtml.join('');
    

}
