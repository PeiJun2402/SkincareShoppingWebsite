import { diaplayRecomCard }from './displayCard.js'

export async function productCard(skintype){
    //【CATCH】 html element
    const productSquare = document.querySelector(".product-square");

    //product data
    const poductArrays = [
        {"id":1,"nameTW":"均衡打底積學草化妝水","nameEN":"Balanced Primer Toner","mL":200,"price":653,"skintype":["乾癢肌","中性肌","油田肌","全產品"],"info":"均衡打底積學草化妝水，專為乾癢肌、中性肌及油田肌設計，積學草成分提供深層舒緩和滋潤，調節水油平衡。有效針對不同肌膚需求，讓肌膚自然清新。","img":"../../public/image/Balanced Primer Toner IMG.jpg","url":"./BalancedPrimerToner.html?id=1","recommend":true,"addToCart":false},
        {"id":2,"nameTW":"1.5%水楊酸精華液","nameEN":"1% Salicylic Acid Serum","mL":100,"price":990,"skintype":["中性肌","油田肌","全產品"],"info":"1.5%水楊酸精華液，含高效水楊酸，深入清潔毛孔，去除老廢角質，改善肌膚質地。有效控油、縮小毛孔，讓肌膚呈現清透光滑的自然光采。","img":"../../public/image/Salicylic Acid Serum IMG.jpg","url":"./SalicylicAcidSerum.html?id=2","recommend":true,"addToCart":false},
        {"id":3,"nameTW":"淨潤B5修護乳液","nameEN":"Pantothenic acid Repair Lotion","mL":150,"price":792,"skintype":["乾癢肌","中性肌","全產品"],"info":"淨潤B5修護乳液，富含維他命B5，為肌膚提供深層滋潤和修護，舒緩乾燥，增強肌膚屏障功能。令肌膚保持柔嫩光滑。","img":"../../public/image/Pantothenic acid Repair Lotio IMG.jpg","url":"./PantothenicAcidRepairLotion.html?id=3","recommend":true,"addToCart":false},
        {"id":4,"nameTW":"A醇精華霜","nameEN":"Retinol Serum Cream","mL":30,"price":998,"skintype":["乾癢肌","中性肌","油田肌","全產品"],"info":"A醇精華霜，富含高濃度A醇，有效抗老化，促進肌膚細胞更新。持續使用可改善肌膚質地，提升光滑度與緊緻感，使肌膚更加年輕健康。","img":"../../public/image/Retinol Serum Cream IMG.jpg","url":"./RetinolSerumCream.html?id=4","recommend":false,"addToCart":false},
        {"id":5,"nameTW":"溫和卸妝露","nameEN":"Gentle Makeup Remover","mL":150,"price":589,"skintype":["乾癢肌","全產品"],"info":"溫和卸妝露，專為敏感肌設計，輕柔去除彩妝和雜質，潔淨效果佳。無刺激感，保持肌膚清爽舒適，適合每日使用。","img":"../../public/image/Gentle Makeup Remover IMG.jpg","url":"./GentleMakeupRemover.html?id=5","recommend":true,"addToCart":false},
        {"id":6,"nameTW":"植萃卸妝油","nameEN":"Botanical Cleansing Oil","mL":150,"price":688,"skintype":["乾癢肌","中性肌","全產品"],"info":"植萃卸妝油，融合多種天然植物萃取，溫和卸除彩妝及雜質，深層潔淨肌膚。輕盈質地不油膩，適合日常使用，讓肌膚保持清新舒適。","img":"../../public/image/Botanical Cleansing Oil IMG.jpg","url":"./BotanicalCleansingOil.html?id=6","recommend":false,"addToCart":false},
        {"id":7,"nameTW":"抗光老SPF50++防曬","nameEN":"Anti-Light Aging Sunscreen","mL":60,"price":826,"skintype":["中性肌","油田肌","全產品"],"info":"抗光老SPF50++防曬，提供高效紫外線防護，有效預防光老化。輕盈不油膩，保護肌膚免受陽光傷害，幫助維持年輕健康的肌膚狀態。","img":"../../public/image/Anti-Light Aging Sunscreen IMG.jpg","url":"./AntiLightAgingSunscreen.html?id=7","recommend":true,"addToCart":false},
        {"id":8,"nameTW":"菸鹼醯胺保濕面膜","nameEN":"B3 Hydrating Facial Mask","mL":1,"price":637,"skintype":["乾癢肌","中性肌","全產品"],"info":"菸鹼醯胺保濕面膜，含菸鹼醯胺成分，提供深層滋潤，增強肌膚屏障功能，改善膚色不均。有效舒緩乾燥，使肌膚感覺水潤柔嫩，恢復舒適感。","img":"../../public/image/B3 Hydrating Facial Mask IMG.jpg","url":"./B3HydratingFacialMask.html?id=8","recommend":true,"addToCart":false}
         
    ]
 
    const productHtml =  poductArrays.map((poductArray)=>{ 
        
        if(poductArray.skintype.includes(skintype)){
            return diaplayRecomCard(poductArray,skintype) 

        } 
        
    });
    productSquare.innerHTML= productHtml.join('');
    

}
