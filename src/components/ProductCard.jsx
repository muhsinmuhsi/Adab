import { Link } from 'react-router-dom';


const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-0.5 overflow-hidden border border-gray-200 max-w-xs mx-auto sm:max-w-sm w-full">
      <Link to={`/products/${product._id}`} className="block">
        <div className="w-full h-48 sm:h-52 bg-gray-100">
          <img
            src={
              product.images && product.images.length > 0
                ? product.images[0]
                : 'https://via.placeholder.com/300'
            }
            alt={product.name}
            className="w-full h-full object-fill"
          />
        </div>
      </Link>

      <div className="p-3 sm:p-4">
        <Link to={`/products/${product._id}`}>
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 truncate hover:underline">
            {product.title}
          </h3>
        </Link>

        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <span className="text-base sm:text-lg font-bold text-yellow-600">
            ₹{product.price}
          </span>

          <div className="flex gap-2">
            <Link
              to={`/products/${product._id}`}
              className="flex-1 text-center bg-black hover:bg-indigo-600 text-white text-xs sm:text-sm px-3 py-1.5 rounded-md"
            >
              View
            </Link>

            {/* <button
              onClick={() => shareToWhatsApp(product)}
              className="flex-1 flex items-center justify-center gap-1 bg-green-500 hover:bg-green-600 text-white text-xs sm:text-sm px-3 py-1.5 rounded-md"
            >
              <FaWhatsapp className="text-base" />
              <span>Buy</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
