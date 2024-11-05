
//顯示最上層label
export function displayTable(){
    return `
         <tr >
            <th></th>
            <th>品項</th>
            <th>數量</th>
            <th>小計</th>
        </tr>`


}

//顯示每筆購買產品
export function displayItemCard(data){

    return`
    <tr>
        <td><i  id="${data.id}" class="fa-solid fa-trash-can deleteBtn"></i></td>
        <td>${data.nameTW}</td>
        <td>
            <i  id="${data.id}" class="fa-solid fa-plus plusBtn"></i>
            ${data.quantity}個
            <i id="${data.id}" class="fa-solid fa-minus minusBtn"></i>
        </td>
        <td>NT${data.price*data.quantity}</td>
    </tr>`
}

