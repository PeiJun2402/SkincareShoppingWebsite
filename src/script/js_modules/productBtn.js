export async function productBtn(){

    //【CATCH】html element
    const productPlusBtn = document.querySelector(".productPlusBtn");
    const productMinusBtn = document.querySelector(".productMinusBtn");
    const productInput = document.querySelector(".add-shoppingCart input");
    let productQty =Number(productInput.value)
    const productPrice = document.querySelector(".productPrice");


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
     productPrice.innerHTML = productInfo.price * productQty;

    productPlusBtn.addEventListener("click",function(){
        productQty++;
        productInput.value = productQty;
        productPrice.innerHTML = productInfo.price * productQty;
    })

    productMinusBtn.addEventListener("click",function(){
        if(productQty > 1){
            productQty--;
            productInput.value = productQty;
            productPrice.innerHTML = productInfo.price * productQty;
        }
    })
}