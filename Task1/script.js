document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { name: "Dell Inspiron", price: "£699", description: "A reliable laptop for everyday use.", imageUrl: "dell.jpg" },
        { name: "HP Pavilion", price: "£749", description: "A high-performance laptop for work and play.", imageUrl: "hp.jpg" },
        { name: "Lenovo ThinkPad", price: "£499", description: "A durable laptop with excellent build quality.", imageUrl: "lenovo1.jpg" }
    ];

    const productList = document.querySelector('.product-list');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <p>${product.description}</p>
        `;
        productList.appendChild(productItem);
    });

    document.getElementById('contactForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Thank you for your message!');
    });
});

document.getElementById('redirectButton').addEventListener('click', function () {
    window.location.href = 'https://www.laptopsaver.co.uk/';
});

