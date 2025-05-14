// Datos de productos de ejemplo (asegúrate de que estos coincidan con tus imágenes)
const productsData = [
    {
        id: 1,
        brand: "nike",
        title: "Air Force 1 '07",
        gender: "hombre",
        price: 299.99,
        sizes: [38, 39, 40, 41, 42, 43],
        image: "imagenes/air-force-1.jpg"
    },
    {
        id: 2,
        brand: "adidas",
        title: "Ultraboost 22",
        gender: "mujer",
        price: 199.99,
        sizes: [36, 37, 38, 39, 40],
        image: "imagenes/ultraboost-22.jpg"
    },
    {
        id: 3,
        brand: "puma",
        title: "RS-X",
        gender: "hombre",
        price: 149.99,
        sizes: [39, 40, 41, 42, 43],
        image: "imagenes/puma-rsx.jpg"
    },
    {
        id: 4,
        brand: "jordan",
        title: "Air Jordan 1",
        gender: "mujer",
        price: 159.99,
        sizes: [36, 37, 38, 39, 40, 41, 42, 43, 44],
        image: "imagenes/jordan-1.jpg"
    },
    {
        id: 5,
        brand: "reebok",
        title: "Classic Leather",
        gender: "niños",
        price: 189.99,
        sizes: [36, 37, 38, 39, 40, 41, 42],
        image: "imagenes/reebok-classic.jpg"
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