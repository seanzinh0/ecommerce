"use strict";

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => updateUI(json.products));

function updateUI(products) {
    const productGrid = document.querySelector('.product-grid');

    let result = "";
    products.forEach(product => {
        const { image, title, price, description } = product;

        result += `
            <div class="card__product">
                <img src="${image}" alt="${title}">
                <div class="card__product-text">
                    <h1 class="card__product-title">${title}</h1>
                    <p class="card__product-price">${price}</p>
                    <p class="card__product-description">${description}</p>
                </div>
            </div>
        `;
    });
    productGrid.innerHTML = result;
}
