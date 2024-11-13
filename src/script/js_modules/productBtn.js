export async function productBtn(){

    //【CATCH】html element
    const productPlusBtn = document.querySelector(".productPlusBtn");
    const productMinusBtn = document.querySelector(".productMinusBtn");
    const productForm = document.querySelector(".productForm");
    const productInput = document.querySelector(".add-shoppingCart input");
    const productPrice = document.querySelector(".productPrice");

    let productQty =Number(productInput.value)


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

    productPlusBtn.addEventListener("click",function(e){ 
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

    productForm.addEventListener("submit",function(e){
        e.preventDefault()
        productQty =Number(productInput.value)
        productPrice.innerHTML = productInfo.price * productQty;
    })

}