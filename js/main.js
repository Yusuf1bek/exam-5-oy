const wrapper = document.querySelector(".wrapper-products");
const loading = document.querySelector(".loading");
const btn = document.querySelector(".btn");

const api = "https://fakestoreapi.com";

let limitCount = 4;  
let offset = 1;  

async function getData(endpoint, count) {
    try {
        loading.style.display = "block"; 
        const response = await fetch(`${api}/${endpoint}?limit=${limitCount * count}`);
        const res = await response.json();
        createProduct(res);  
    } catch (err) {
        console.log(err);
    } finally {
        loading.style.display = "none";  
    }
}

getData("products", offset);  

btn.addEventListener("click", () => {
    limitCount += 4;  
    getData("products", offset);  
});

function createProduct(data){
    wrapper.innerHTML = ''; 
    data.forEach(product => {
        const card = document.createElement("div");
        card.dataset.id = product.id;
        card.className = "card";
        card.innerHTML = ` 
                <div class="img-card">
                    <img data-id="${product.id}" class="card_img" src="${product.image}" alt="${product.title}" width="115" height="180">
                    <div class="image-wrapper">
                        <img class="card_img" src="./images/like-icon.svg" alt="like" width="34" height="34">
                        <img class="card_img" src="./images/eye-icon.svg" alt="eye" width="34" height="34">
                    </div>

                </div>
                <h3 class="card-title">${product.title}</h3>
                <div class="card-wrapper">
                    <p class="card-price">$${product.price}</p>
                    <p> ${`<i class=" card-rate fa-solid fa-star"></i>`.repeat(product.rating.rate)} 
                    (${product.rating.count})</p>
                </div>

        `;
        wrapper.appendChild(card);  
    });
}
