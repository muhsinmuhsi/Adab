import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';
import api from '../api';
import { shareToWhatsApp } from '../utils/whatsappShare'; // Adjust the path if needed

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
        setSelectedImage(res.data.images?.[0] || res.data.image);
      } catch (err) {
        console.error('Failed to load product details:', err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p className="text-center p-4">Loading product...</p>;
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Product Images */}
      <div className="mb-4">
        <img
          src={selectedImage}
          alt="Main product"
          className="w-full h-72 object-fill rounded-xl border"
        />
        {product.images && (
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`w-16 h-16 object-fill rounded-md border cursor-pointer ${
                  selectedImage === img ? 'ring-2 ring-blue-500' : ''
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-bold">₹{product.price}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-4 flex flex-col sm:flex-row gap-2">

        <button
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg w-full"
          onClick={() => shareToWhatsApp({
            name: product.title,
            price: product.price,
            image: selectedImage,
            _id: product._id
          })}
        >
          <FaWhatsapp className="text-xl" />
          Buy via WhatsApp
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
