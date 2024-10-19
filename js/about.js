const content = document.querySelector(".content")
const loading = document.querySelector(".loading")
const api = "https://fakestoreapi.com";

async function getData() {
    let query = new URLSearchParams(window.location.search);
    let id = query.get("q");
    try {
        const res = await fetch(`${api}/products/${id}`);
        const data = await res.json();
        createContent(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    } finally {
        loading.style.display = "none";
    }
}


getData()
function createContent(data){
    content.innerHTML = `
        <div class="detail-wrapper">
            <img src=${data.image} alt="${data.category}" width="500" height="600">
            <div class="wrapper-detail">
                <h2 class="detail-title">${data.title}</h2>
                <div class="detail-content">
                    <p class="detail-text"> ${`<i class=" card-rate fa-solid fa-star"></i>`
                        .repeat(data.rating.rate)} <span class="detail-span">(${data.rating.count} Reviews)</span></p> | <p class="text-stock">In stock</p>
                </div>
                <strong class="detail-strong">$${data.price}</strong>
                <div class="text-wrapper">
                    <p class="detail-desc">${data.description}</p>
                    </div>
                    <hr>
                    <div class="color-wrapper">
                        <p>Colours:</p>
                        <img src="../images/colors.svg" alt="Like-icon" width="35" height="20">
                    </div>
                    <ul class="size-list">
                        <p>Size:</p>
                        <li class="size-item">
                            <strong class="size-strong">XS</strong>
                        </li>
                        <li class="size-item">
                            <strong class="size-strong">S</strong>
                        </li>
                        <li class="size-item">
                            <strong class="size-strong">M</strong>
                        </li>
                        <li class="size-item">
                            <strong class="size-strong">L</strong>
                        </li>
                        <li class="size-item">
                            <strong class="size-strong">XL</strong>
                        </li>
                    </ul>
                    <div class="wrapper-buy">
                            <img src="../images/counts.svg" alt="Like-icon" width="159" height="44">
                            <button class="span-buy">Buy Now</button>
                            <img class="like-btn" src="../images/like.svg" alt="Like-icon" width="32" height="32">
                    </div>
                    <div class="delivery-return-wrapper">
                        <div class="return-wrapper">
                            <img src="../images/delivery.svg" alt="Like-icon" width="32" height="32">
                            <div>
                                <h3>Free Delivery</h3>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>
                        </div>
                        <hr class="border-detail">
                        <div class="return-wrapper">
                            <img src="../images/return.svg" alt="Like-icon" width="32" height="32">
                            <div>
                                <h3>Free Delivery</h3>
                                <p>Enter your postal code for Delivery Availability</p>
                            </div>                        
                        </div>
                    </div>
            </div>
            </div>

    `
}