
function addItemsToGridProducts() 
{
    let gridProducts = document.querySelector(".products-page .grid-products");

    gridProducts.innerHTML = "";
    fetch('jsonFile/products.json')
    .then((respons) => respons.json())
    .then((data)=>
    {

        data.products.forEach((element) => 
        {
            let box = 
            `
                <div class="box">
                    <div class="favourite">
                        <svg width="29" height="27" viewBox="0 0 24 24" class="heart-icon" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 
                                   2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09 
                                   C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5 
                                   c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                    </div>
                    <div class="content-image">
                        <img src="${element.img}" alt="Product">
                    </div>
                    <div class="content-text">
                        <p>${element.name}</p>
                        <h3>$${element.price}</h3>
                        <a class = "shop-now" data-index = "${element.id}" href="#">Shop Now</a>
                    </div>
                </div>  
            `

            gridProducts.innerHTML += box;

        });



    })

}

addItemsToGridProducts();
