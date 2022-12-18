import { mensProducts } from "./data.js"

// products DOM
const productsDOM = document.getElementById('mens-products-wrapper')

// update mens products
mensProducts.forEach((product)=>{
  const {name,price,image,currency} = product
  const productTemplate = `
  <div class="product-card-wrapper">
    <a class="product-card-link" href="../page/product.html" ></a>
    <img class="img product-img" src="${image}" alt="${name}"/>
    <p class="text-center product-name" >${name}</p>
    <p class="text-center product-price" >${currency}${price}</p>
  </div>
`
  productsDOM.innerHTML += productTemplate
})

