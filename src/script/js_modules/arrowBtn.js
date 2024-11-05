

export function arrowBtnApp(){
    const cardSquare = document.querySelector(".card-square");
    const arrowBtns = document.querySelectorAll(".recomdProduct button" );
    const singleCard = document.querySelector(".single-card" );


    const singleCardWidth = singleCard.offsetWidth;
    const cardGap = parseFloat(window.getComputedStyle(cardSquare).gridGap); 
    const scrollAmount = singleCardWidth + cardGap;


    arrowBtns.forEach((arrowBtn)=>{
        arrowBtn.addEventListener("click",function(){

            if(arrowBtn.className === "arrowLeftBtn"){

                cardSquare.scrollLeft += (-scrollAmount)
            }
            else{
                cardSquare.scrollLeft += scrollAmount;
                

            }
        })

    })
}
