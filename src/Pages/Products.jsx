import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceSort, setPriceSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch products from backend
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        // Use placeholder data if API fails
        setProducts([
          {
            _id: '1',
            name: 'Wireless Earbuds',
            description: 'Premium wireless earbuds with noise cancellation and long battery life.',
            price: 79.99,
            category: 'electronics',
            image: '/api/placeholder/400/320'
          },
          {
            _id: '2',
            name: 'Smart Watch',
            description: 'Feature-packed smartwatch with health monitoring and notifications.',
            price: 129.99,
            category: 'electronics',
            image: '/api/placeholder/400/320'
          },
          {
            _id: '3',
            name: 'Portable Speaker',
            description: 'Waterproof Bluetooth speaker with 24-hour battery life.',
            price: 59.99,
            category: 'electronics',
            image: '/api/placeholder/400/320'
          },
          {
            _id: '4',
            name: 'Laptop Backpack',
            description: 'Stylish and functional backpack with anti-theft features.',
            price: 49.99,
            category: 'fashion',
            image: '/api/placeholder/400/320'
          },
          {
            _id: '5',
            name: 'Leather Wallet',
            description: 'Genuine leather wallet with RFID protection.',
            price: 34.99,
            category: 'fashion',
            image: '/api/placeholder/400/320'
          },
          {
            _id: '6',
            name: 'Stainless Steel Water Bottle',
            description: 'Double-walled vacuum insulated bottle keeps drinks hot or cold.',
            price: 24.99,
            category: 'home',
            image: '/api/placeholder/400/320'
          },
          {
            _id: '7',
            name: 'Smart LED Light Bulbs',
            description: 'WiFi-connected RGB bulbs that can be controlled via smartphone.',
            price: 19.99,
            category: 'home',
            image: '/api/placeholder/400/320'
          },
          {
            _id: '8',
            name: 'Wireless Charging Pad',
            description: 'Fast wireless charger compatible with all Qi-enabled devices.',
            price: 29.99,
            category: 'electronics',
            image: '/api/placeholder/400/320'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter and sort products
  const filteredProducts = products.filter(product => {
    // Filter by category
    if (categoryFilter !== 'all' && product.category !== categoryFilter) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    // Sort by price
    if (priceSort === 'low-to-high') {
      return a.price - b.price;
    } else if (priceSort === 'high-to-low') {
      return b.price - a.price;
    }
    return 0;
  });

  const categories = ['all', 'electronics', 'fashion', 'home'];

  return (
    <div className="bg-light min-h-screen">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-dark mb-8 font-heading">Our Products</h1>
        
        {/* Search and filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            {/* Search */}
            <div className="flex-1 md:mr-4">
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <svg className="h-5 w-5 text-dark-light" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Category filter */}
            <div className="flex-shrink-0">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            
            {/* Price sort */}
            <div className="flex-shrink-0">
              <select
                value={priceSort}
                onChange={(e) => setPriceSort(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
              >
                <option value="">Sort by Price</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Products grid */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-dark">No products found</h3>
            <p className="mt-2 text-dark-light">Try changing your filters or search query</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;