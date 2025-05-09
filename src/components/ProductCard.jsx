import { Link } from 'react-router-dom';
import { shareToWhatsApp } from '../utils/whatsappShare';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link to={`/products/${product._id}`}>
        <div className="h-48 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover" 
          />
        </div>
      </Link>
      
      <div className="p-4">
        <Link to={`/products/${product._id}`}>
          <h3 className="text-lg font-medium text-dark truncate">{product.name}</h3>
        </Link>
        
        <div className="mt-1 text-sm text-dark-light line-clamp-2">
          {product.description}
        </div>
        
        <div className="flex items-center justify-between mt-3">
          <span className="text-primary font-bold">${product.price.toFixed(2)}</span>
          
          <div className="flex space-x-2">
            <Link 
              to={`/products/${product._id}`}
              className="bg-primary hover:bg-primary-dark text-white text-sm py-1 px-3 rounded focus:outline-none"
            >
              View
            </Link>
            
            <button
              onClick={() => shareToWhatsApp(product)}
              className="bg-accent hover:bg-accent-dark text-white text-sm py-1 px-3 rounded focus:outline-none flex items-center"
            >
              <span>Buy Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;