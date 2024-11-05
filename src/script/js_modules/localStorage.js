export function localstorageData(purchasingData){

    let itemProducts =[];
    

    const getData = localStorage.getItem("product");
    const cartItemData = JSON.parse(getData);

    if(cartItemData === null){
        itemProducts.push(purchasingData);
        const localCartItem = JSON.stringify(itemProducts);
        return localStorage.setItem("product",localCartItem);


    }else{
        itemProducts.push(...cartItemData);


        if(!itemProducts.some(itemProduct => itemProduct.id === purchasingData.id)){
            itemProducts.push(purchasingData);
        }
        
        const localCartItem = JSON.stringify(itemProducts);
        return localStorage.setItem("product",localCartItem);
    }


}