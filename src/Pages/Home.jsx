import React, { useEffect, useState } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useNavigate } from 'react-router-dom';
import bannerImage1 from '../assets/BannerImage.jpg';
import bannerImage2 from '../assets/BannerImage2.jpg';
import beauty from '../assets/beautyandPersonalcare.jpg'
import Kitchen from '../assets/KitchenImage.jpg'
import Health from '../assets/HealthImage.jpg'
import Fashion from '../assets/FashionImage.jpg'
import Electronics from '../assets/ElectronicsImage.jpg'
import Hobbies from '../assets/HobbiesImages.jpg'


const dummyCategories = [
  {
    _id: '1',
    category: 'Beauty',
    image: beauty,
    alt: 'Beauty',
  },
  {
    _id: '2',
    category: 'Kitchen',
    image: Kitchen,
    alt: 'Kitchen',
  },
  {
    _id: '3',
    category: 'Health',
    image: Health,
    alt: 'Health',
  },
  {
    _id: '4',
    category: 'Fashion',
    image: Fashion,
    alt: 'Fashion',
  },
  {
    _id: '5',
    category: 'Electronics',
    image: Electronics,
    alt: 'Electronics',
  },
  {
    _id: '6',
    category: 'Hobbies',
    image: Hobbies,
    alt: 'Hobbies',
  },
];


const Home = () => {
  const [categories, setCategories] = useState([])
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate()

  const visibleCategories = showAll ? categories : categories.slice(0, 4);

  useEffect(() => {
    AOS.init({ duration: 800 })
    setCategories(dummyCategories)
  }, []);

  return (
    <div className='m-3'>
      

      <section className="bg-gradient-to-b from-white to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Everything You Need, All in One Place.
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Premium quality products at unbeatable prices. Shop from trusted brands.
          </p>
          <Link to="/products">
            <button className="px-6 py-3 bg-yellow-500 text-white rounded-full shadow hover:bg-yellow-700 transition duration-300">
              Shop Now
            </button>
          </Link>

          {/* 👇 Image Below Button */}
          <div className="mt-8">
            <img src={bannerImage2} alt="Product Showcase" className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1">
          <img src={bannerImage1} alt="Hero" className="w-full max-w-lg mx-auto rounded-2xl" />
        </div>
      </div>
    </section>

      <h1 className='font-stretch-125% text-xl p-2 my-5'>Shop our curated collection of stylish clothing, accessories, and more. Free shipping on orders over
      $50. </h1>

      <div>
        <h1 data-aos="fade-up" className='text-3xl sm:text-5xl font-bold font-stretch-125% mt-14 mb-5 text-center'>
          Shop by Category
        </h1>

        <div className="px-4 py-6">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {visibleCategories.map((cat) => (
          <div
            key={cat._id}
            data-aos="fade-up"
            onClick={() => navigate(`/products/category/${cat.category}`)}
            className="relative cursor-pointer rounded-md overflow-hidden group"
            style={{ aspectRatio: '2/3' }} 
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.alt || cat.category}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0  bg-black opacity-50 flex items-center justify-center">
              <h2 className="text-white text-lg sm:text-xl font-semibold font-serif text-center px-2">
                {cat.category}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {categories.length > 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition duration-300"
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </div>

      </div>
    </div>
  )
}

export default Home