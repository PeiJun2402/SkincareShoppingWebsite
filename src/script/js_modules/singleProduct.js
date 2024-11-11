export async function singleProduct(){
    //【CATCH】html element
    const titleEN = document.querySelector(".titleEN");
    const titleTW = document.querySelector(".titleTW");
    const productML = document.querySelector(".productML");
    const productDes = document.querySelector(".productDes");
    const productImg = document.querySelector(".productImg");


    //product data
    const data = await fetch('https://raw.githubusercontent.com/PeiJun2402/ProductJson/refs/heads/main/product.json');
    const poductArrays =await data.json()

    
    //get URL 查詢參數
    function getQueryParam(keyValue){
        const urlQuery = new URLSearchParams(window.location.search)
        return urlQuery.get(keyValue);

    }

    const id = Number( getQueryParam("id"));


  

    // //【LOGIC】
    const productInfo = poductArrays.find((poductArray)=>{return poductArray.id === id});

    titleEN.innerHTML = productInfo.nameEN;
    titleTW.innerHTML = productInfo.nameTW;
    productML.innerHTML = productInfo.mL;
    productDes.innerHTML = productInfo.info;
    productImg.src = productInfo.img;

}