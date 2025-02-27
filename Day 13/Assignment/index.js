const products = [
    { name: "Laptop", price: 1000, category: "Electronics", image: "laptop.jpg" },
    { name: "Shirt", price: 20, category: "Clothing", image: "shirt.jpg" }
];

function displayProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach(product => {
        const div = document.createElement("div");
        div.innerHTML = `<h2>${product.name}</h2><p>$${product.price}</p>`;
        const btn = document.createElement("button");
        btn.textContent = "Add to Cart";
        btn.onclick = () => addToCart(product);
        div.appendChild(btn);
        productList.appendChild(div);
    });
}

displayProducts();
