import { productCard }from './productCard.js'

export function dropDown(){

    //get URL 查詢參數
    function getQueryParam(keyValue){
        const urlQuery = new URLSearchParams(window.location.search)
        return urlQuery.get(keyValue);

    }

    
    //display card
    const skinType = getQueryParam("skinType");
    productCard(skinType);

    //smooth scroll
    const productSquareTop =document.querySelector(".product-square").offsetTop;
    window.scrollTo(0, productSquareTop);




}