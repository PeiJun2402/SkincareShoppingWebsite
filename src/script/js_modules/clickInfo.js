

export function attachInfoBtnListeners(){

    let infoBtns = document.querySelectorAll(".infoBtn");

    infoBtns.forEach((infoBtn)=> {
        infoBtn.addEventListener("click",function(e){
            const detailInfo = infoBtn.parentElement.nextElementSibling;
            
            if(detailInfo.style.right === "30px"){
                detailInfo.style.right = "-1000px";
                infoBtn.innerText ="查看更多";

            }else{
                detailInfo.style.right = "30px";
                infoBtn.innerText ="關閉資訊";

            }
    
        })
    
    
    })



}