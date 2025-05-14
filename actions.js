// Datos de productos de ejemplo (asegúrate de que estos coincidan con tus imágenes)
const productsData = [
    {
        id: 1,
        brand: "nike",
        title: "Air Force 1 '07",
        gender: "hombre",
        price: 299.99,
        sizes: [38, 39, 40, 41, 42, 43],
        image: "imagenes/1.jpg"
    },
    {
        id: 2,
        brand: "adidas",
        title: "Ultraboost 22",
        gender: "mujer",
        price: 199.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/2.jpg"
    },
    {
        id: 3,
        brand: "puma",
        title: "RS-X",
        gender: "hombre",
        price: 149.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/3.jpg"
    },
    {
        id: 4,
        brand: "jordan",
        title: "Air Jordan 1",
        gender: "mujer",
        price: 159.99,
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
        image: "imagenes/5.jpg"
    },
    {
        id: 5,
        brand: "reebok",
        title: "Classic Leather",
        gender: "niños",
        price: 189.99,
        sizes: [36, 37, 38, 39, 40, 41, 42],
        image: "imagenes/5.jpg"
    },
    // Productos adicionales generados automáticamente
    {
        id: 6,
        brand: "nike",
        title: "Air Max 270",
        gender: "hombre",
        price: 249.99,
        sizes: [38, 39, 40, 41, 42, 43, 44],
        image: "imagenes/6.jpg"
    },
    {
        id: 7,
        brand: "adidas",
        title: "NMD R1",
        gender: "mujer",
        price: 179.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/7.jpg"
    },
    {
        id: 8,
        brand: "puma",
        title: "Cali Dream",
        gender: "mujer",
        price: 129.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/8.jpg"
    },
    {
        id: 9,
        brand: "jordan",
        title: "Jordan Delta",
        gender: "hombre",
        price: 219.99,
        sizes: [40, 41, 42, 43, 44],
        image: "imagenes/9.jpg"
    },
    {
        id: 10,
        brand: "reebok",
        title: "Club C 85",
        gender: "hombre",
        price: 139.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/10.jpg"
    },
    {
        id: 11,
        brand: "nike",
        title: "Blazer Mid '77",
        gender: "niños",
        price: 169.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/11.jpg"
    },
    {
        id: 12,
        brand: "adidas",
        title: "Superstar",
        gender: "mujer",
        price: 119.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/12.jpg"
    },
    {
        id: 13,
        brand: "puma",
        title: "Future Rider",
        gender: "hombre",
        price: 149.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/13.jpg"
    },
    {
        id: 14,
        brand: "jordan",
        title: "Jordan Mars 270",
        gender: "hombre",
        price: 239.99,
        sizes: [40, 41, 42, 43, 44],
        image: "imagenes/14.jpg"
    },
    {
        id: 15,
        brand: "reebok",
        title: "Zig Kinetica",
        gender: "mujer",
        price: 159.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/15.jpg"
    },
    {
        id: 16,
        brand: "nike",
        title: "React Element 55",
        gender: "hombre",
        price: 199.99,
        sizes: [38, 39, 40, 41, 42, 43],
        image: "imagenes/16.jpg"
    },
    {
        id: 17,
        brand: "adidas",
        title: "Ozweego",
        gender: "niños",
        price: 179.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/17.jpg"
    },
    {
        id: 18,
        brand: "puma",
        title: "Smash V2",
        gender: "hombre",
        price: 109.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/18.jpg"
    },
    {
        id: 19,
        brand: "jordan",
        title: "Air Jordan 4",
        gender: "hombre",
        price: 279.99,
        sizes: [40, 41, 42, 43, 44],
        image: "imagenes/19.jpg"
    },
    {
        id: 20,
        brand: "reebok",
        title: "Floatride Energy",
        gender: "mujer",
        price: 169.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/20.jpg"
    },
    {
        id: 21,
        brand: "nike",
        title: "Dunk Low",
        gender: "niños",
        price: 229.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/21.jpg"
    },
    {
        id: 22,
        brand: "adidas",
        title: "ZX 2K Boost",
        gender: "hombre",
        price: 189.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/22.jpg"
    },
    {
        id: 23,
        brand: "puma",
        title: "Rider Vintage",
        gender: "mujer",
        price: 139.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/23.jpg"
    },
    {
        id: 24,
        brand: "jordan",
        title: "Jordan Why Not Zer0.4",
        gender: "hombre",
        price: 259.99,
        sizes: [40, 41, 42, 43, 44],
        image: "imagenes/24.jpg"
    },
    {
        id: 25,
        brand: "reebok",
        title: "Nano X1",
        gender: "hombre",
        price: 149.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/25.jpg"
    },
    {
        id: 26,
        brand: "nike",
        title: "Air VaporMax Plus",
        gender: "mujer",
        price: 269.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/26.jpg"
    },
    {
        id: 27,
        brand: "adidas",
        title: "Terrex Free Hiker",
        gender: "hombre",
        price: 219.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/27.jpg"
    },
    {
        id: 28,
        brand: "puma",
        title: "Deviate Nitro",
        gender: "mujer",
        price: 179.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/28.jpg"
    },
    {
        id: 29,
        brand: "jordan",
        title: "Jordan React Elevation",
        gender: "hombre",
        price: 239.99,
        sizes: [40, 41, 42, 43, 44],
        image: "imagenes/29.jpg"
    },
    {
        id: 30,
        brand: "reebok",
        title: "Instapump Fury",
        gender: "niños",
        price: 199.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/30.jpg"
    },
    {
        id: 31,
        brand: "nike",
        title: "Air Max 2090",
        gender: "hombre",
        price: 229.99,
        sizes: [38, 39, 40, 41, 42, 43],
        image: "imagenes/31.jpg"
    },
    {
        id: 32,
        brand: "adidas",
        title: "Yeezy Boost 350 V2",
        gender: "mujer",
        price: 299.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/32.jpg"
    },
    {
        id: 33,
        brand: "puma",
        title: "Speedcat",
        gender: "hombre",
        price: 159.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/33.jpg"
    },
    {
        id: 34,
        brand: "jordan",
        title: "Jordan Max 200",
        gender: "mujer",
        price: 179.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/34.jpg"
    },
    {
        id: 35,
        brand: "reebok",
        title: "Question Mid",
        gender: "hombre",
        price: 169.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/35.jpg"
    },
    {
        id: 36,
        brand: "nike",
        title: "Pegasus 38",
        gender: "niños",
        price: 149.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/36.jpg"
    },
    {
        id: 37,
        brand: "adidas",
        title: "Gazelle",
        gender: "mujer",
        price: 129.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/37.jpg"
    },
    {
        id: 38,
        brand: "puma",
        title: "Cell Surin",
        gender: "hombre",
        price: 139.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/38.jpg"
    },
    {
        id: 39,
        brand: "jordan",
        title: "Jordan One Take",
        gender: "hombre",
        price: 199.99,
        sizes: [40, 41, 42, 43, 44],
        image: "imagenes/39.jpg"
    },
    {
        id: 40,
        brand: "reebok",
        title: "Aztrek Double",
        gender: "mujer",
        price: 159.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/40.jpg"
    }
];


// Variables globales
let currentBrand = 'all';
let currentFilters = {
    gender: 'all',
    size: 'all',
    price: 1000, // Aumenté el precio máximo inicial
    sort: 'default',
    searchQuery: ''
};

// Función para renderizar productos
function renderProducts(products) {
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    
    if (!products || products.length === 0) {
        productsContainer.innerHTML = `
            <div class="no-results">
                No se encontraron productos con los filtros seleccionados
            </div>
        `;
        return;
    }
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}" onerror="this.src='imagenes/default-shoe.jpg'">
            </div>
            <div class="product-info">
                <div class="product-brand">${product.brand.toUpperCase()}</div>
                <div class="product-title">${product.title}</div>
                <div class="product-price">S/ ${product.price.toFixed(2)}</div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });
}

// Función para aplicar filtros
function applyFilters() {
    let filteredProducts = productsData;
    
    // Filtrar por marca
    if (currentBrand !== 'all') {
        filteredProducts = filteredProducts.filter(
            product => product.brand === currentBrand
        );
    }
    
    // Filtrar por género
    if (currentFilters.gender !== 'all') {
        filteredProducts = filteredProducts.filter(
            product => product.gender === currentFilters.gender
        );
    }
    
    // Filtrar por talla
    if (currentFilters.size !== 'all') {
        const sizeNum = parseInt(currentFilters.size);
        filteredProducts = filteredProducts.filter(
            product => product.sizes.includes(sizeNum)
        );
    }
    
    // Filtrar por precio
    filteredProducts = filteredProducts.filter(
        product => product.price <= currentFilters.price
    );
    
    // Filtrar por búsqueda
    if (currentFilters.searchQuery) {
        const query = currentFilters.searchQuery.toLowerCase();
        filteredProducts = filteredProducts.filter(
            product => product.title.toLowerCase().includes(query) || 
                      product.brand.toLowerCase().includes(query)
        );
    }
    
    renderProducts(filteredProducts);
}

// Event listeners para los filtros
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar filtros
    document.getElementById('gender-filter').addEventListener('change', function() {
        currentFilters.gender = this.value;
        applyFilters();
    });
    
    document.getElementById('size-filter').addEventListener('change', function() {
        currentFilters.size = this.value;
        applyFilters();
    });
    
    document.getElementById('price-filter').addEventListener('input', function() {
        currentFilters.price = parseInt(this.value);
        document.getElementById('price-value').textContent = `S/ ${this.value}`;
        applyFilters();
    });
    
    document.getElementById('sort-filter').addEventListener('change', function() {
        currentFilters.sort = this.value;
        applyFilters();
    });
    
    // Buscador
    document.getElementById('search-btn').addEventListener('click', function() {
        currentFilters.searchQuery = document.getElementById('search-input').value.trim();
        applyFilters();
    });
    
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            currentFilters.searchQuery = this.value.trim();
            applyFilters();
        }
    });
    
    // Marcas
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            currentBrand = this.dataset.brand;
            applyFilters();
        });
    });
    
    // Mostrar todos los productos al cargar
    applyFilters();
});
