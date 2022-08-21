const productList = [];
const cardBody = document.getElementById('card-body');
function addToCart(event) {
    const cardElement = this.event.target.parentNode.parentNode.parentNode;
    const productTitle = cardElement.children[1].children[0].innerText;
    const productPrice = cardElement.children[1].children[2].children[0].innerText;
    const product = {
        name: productTitle,
        price: productPrice
    };
    productList.push(product);
    cardBody.innerHTML = '';
    displayProduct(productList);
}

function displayProduct(productList) {
    let count = 1;
    let sum = 0;
    for (let product of productList) {
        const tableRow = document.createElement('tr');
        tableRow.innerHTML = `
            <th>${count}</th>
            <td>${product.name}</td>
            <td>${product.price}</td>
        `;
        cardBody.appendChild(tableRow);
        sum += parseInt(product.price);
        count++;
    }
    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `
        <th></th>
        <th class="text-lg text-teal-700">TOTAL</th>
        <th>${sum}</th>
    `;
    cardBody.appendChild(tableRow);
}