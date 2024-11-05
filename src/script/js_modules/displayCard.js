export function diaplayRecomCard(product,skintype){

    return `<div class="single-card">
          <a href="${product.url}"></a>
          <img src="${product.img}" alt="${product.nameTW}">
          <div class="card-word">
            <div class="top-word">
              <h5>Skin Type <p>${skintype==="全產品" ? product.skintype[0] : skintype}</p></h5>
              <button class="addProductBtn" id="${product.id}">加入購物車 <i class="fa-solid fa-cart-shopping"></i></button>
           </div>
            <div class="buttom-word">
              <div class="left-word">
                  <h3>${product.nameEN}</h3>
                  <p>${product.nameTW}</p>
              </div>
              <div class="right-word">
                  <p>$${product.price}</p>
              </div>
            </div>
          </div>

        </div>`

};