document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    const loadingMessage = document.getElementById('loading');
    const cartNotification = document.getElementById('cart-notification');
    const sortBySelect = document.getElementById('sort-by');

    const products = [
        { name: 'Smartphone', price: 15000, image: 'https://tse2.mm.bing.net/th?id=OIP.heiMc6SYR63f5as5H8xh_QHaHa&w=474&h=474&c=7' },
        { name: 'Laptop', price: 50000, image: 'https://tse2.mm.bing.net/th?id=OIP.LvQsnzTTs9HhXsNIlNLyIwHaHa&w=474&h=474&c=7' },
        { name: 'Headphones', price: 2000, image: 'https://www.channelnews.com.au/wp-content/uploads/2017/09/beats_by_dr_dre_mhdm2am_a_studio_wireless_over_ear_headphones_gold_1098356.jpg' },
        { name: 'Smartwatch', price: 5000, image: 'https://tse2.mm.bing.net/th?id=OIP.d-77G7hmOGkHDQ__PP8CwgHaHa&w=474&h=474&c=7' },
        { name: 'Camera', price: 30000, image: 'https://tse4.mm.bing.net/th?id=OIP.RVtk-SU250nOVEDOZWsmYwHaHa&w=474&h=474&c=7' },
        { name: 'Tablet', price: 25000, image: 'https://tse2.mm.bing.net/th?id=OIP.k38-Hy-EalUsMqh7WIIWWwHaE7&w=315&h=315&c=7' },
    ];

    function displayProducts(productsToDisplay) {
        productGrid.innerHTML = "";
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            const productImage = document.createElement('img');
            productImage.src = product.image;
            productImage.alt = product.name;
            productImage.classList.add('product-image');
            productImage.onload = () => productImage.classList.add('loaded');

            const productName = document.createElement('div');
            productName.classList.add('product-name');
            productName.textContent = product.name;

            const productPrice = document.createElement('div');
            productPrice.classList.add('product-price');
            productPrice.textContent = `₹${product.price}`;

            const addToCartButton = document.createElement('button');
            addToCartButton.classList.add('add-to-cart');
            addToCartButton.innerHTML = '<img src="https://www.iconpacks.net/icons/2/free-add-to-cart-icon-3046-thumb.png" class="cart-icon"> Add to Cart';

            addToCartButton.addEventListener('click', () => {
                cartNotification.textContent = `${product.name} added to cart!`;
                cartNotification.classList.add('show');
                setTimeout(() => {
                    cartNotification.classList.remove('show');
                }, 3000);
            });

            productCard.appendChild(productImage);
            productCard.appendChild(productName);
            productCard.appendChild(productPrice);
            productCard.appendChild(addToCartButton);
            productGrid.appendChild(productCard);
        });
    }

    function sortProducts(order) {
        let sortedProducts;
        if (order === 'price-asc') {
            sortedProducts = [...products].sort((a, b) => a.price - b.price);
        } else if (order === 'price-desc') {
            sortedProducts = [...products].sort((a, b) => b.price - a.price);
        } else {
            sortedProducts = products;
        }
        displayProducts(sortedProducts);
    }

    sortBySelect.addEventListener('change', (e) => {
        sortProducts(e.target.value);
    });

    setTimeout(() => {
        loadingMessage.style.display = 'none';
        displayProducts(products);
    }, 1000);
});
