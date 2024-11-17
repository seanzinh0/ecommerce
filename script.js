"use strict";

//array that holds json data
let products = [];

//fetch json data
fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        products = json.products; //store products from json in products array
        updateUI(products); //update UI with json products data
    });

//updateUI function
function updateUI(products) {
    const productGrid = document.querySelector('.product-grid'); //product grid element

    let result = ""; //empty string that is used to store result
    products.forEach(product => { //loop through products in array
        const { image, title, price, description } = product; //destructure the product

        //html that appends to result
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
    productGrid.innerHTML = result; //place the result in the product grid element
}

//sorting options from dropdown menu
const sortOptions = document.getElementById("sort");
//default sorting option
const defaultOption = document.getElementById("default__option");

//allows for when page reloads to assign the sort option to the default
sortOptions.value = defaultOption.value;

//event listener that checks if the sort options are changed
sortOptions.addEventListener("change", () => {
  let sortedProducts = [...products]; //copy product array using spread

   //check for sorting option and sort according to name
   if (sortOptions.value === "a-to-z"){
       sortedProducts.sort((a, b) => {
           return a.title.localeCompare(b.title); //compare titles
       });
   }else if (sortOptions.value === "z-to-a"){
        sortedProducts.sort((a, b) => {
           return b.title.localeCompare(a.title); //compare titles
       })
   }else if (sortOptions.value === "asc-price"){
       sortedProducts.sort((a, b) => {
           //convert price string to number and remove $
           const priceA = parseFloat(a.price.replace(/[$,]/g, ""));
           const priceB = parseFloat(b.price.replace(/[$,]/g, ""));
           return priceA - priceB; //compare prices
       });
   }else if (sortOptions.value === "desc-price"){
       sortedProducts.sort((a, b) => {
           //convert price string to number and remove $
           const priceA = parseFloat(a.price.replace(/[$,]/g, ""));
           const priceB = parseFloat(b.price.replace(/[$,]/g, ""));
           return priceB - priceA; //compare prices
       });
   }

   updateUI(sortedProducts);
});

