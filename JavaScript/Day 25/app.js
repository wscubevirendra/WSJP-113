async function getProducts() {
    var response = await fetch("https://dummyjson.com/products");
    var data = await response.json()
    console.log(data.products)
    sectionProducts(data.products.slice(0, 4), "topSection");
    sectionProducts(data.products.slice(4, 8), "TrendingSection");
    sectionProducts(data.products.slice(20, 24), "DealsSection");
    sectionProducts(data.products.slice(12, 16), "LatestSection");
    sectionProducts(data.products.slice(0,28), "Allproduct");
}


function sectionProducts(items, section) {

    var heading = document.getElementById(section);
    if (!heading) return;

    html = '';
    for (data of items) {
        html += `<div class="product-card">
                <img src=${data.thumbnail} alt="Product 1" />
                <h3>${data.title}</h3>
                <p class="price">$ ${data.price} </p>
            </div>`
    }

    heading.innerHTML = html
}


getProducts();