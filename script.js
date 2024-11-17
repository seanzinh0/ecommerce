"use strict";

let products = [];

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        products = json.products;
        updateUI(products)
    });

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

const sortOptions = document.getElementById("sort");
const defaultOption = document.getElementById("default__option");

sortOptions.value = defaultOption.value;

sortOptions.addEventListener("change", () => {
  let sortedProducts = [...products];

   if (sortOptions.value === "a-to-z"){
       sortedProducts.sort((a, b) => {
           return a.title.localeCompare(b.title);
       });
   }else if (sortOptions.value === "z-to-a"){
       return sortedProducts.sort((a, b) => {
           return b.title.localeCompare(a.title);
       })
   }else if (sortOptions.value === "asc-price"){
       sortedProducts.sort((a, b) => {
           const priceA = parseFloat(a.price.replace(/[$,]/g, ""));
           const priceB = parseFloat(b.price.replace(/[$,]/g, ""));
           return priceA - priceB;
       });
   }else if (sortOptions.value === "desc-price"){
       sortedProducts.sort((a, b) => {
           const priceA = parseFloat(a.price.replace(/[$,]/g, ""));
           const priceB = parseFloat(b.price.replace(/[$,]/g, ""));
           return priceB - priceA;
       });
   }

   updateUI(sortedProducts);
});

