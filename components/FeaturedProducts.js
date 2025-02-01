'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 

export default function FeaturedProducts() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [categories, setCategories] = useState(['All']);
  const router = useRouter();  

  useEffect(() => {
    fetch('/products.json')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 4)); 
        const uniqueCategories = ['All', ...new Set(data.map((product) => product.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    const productExists = existingCart.find(item => item.id === product.id);
    
    if (productExists) {
      productExists.quantity += 1;
    } else {
      existingCart.push({ id: product.id, name: product.name, price: product.price, image: product.images[0], quantity: 1 });
    }

    localStorage.setItem("cartItems", JSON.stringify(existingCart));

  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-inherit">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Featured Products
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={product.images[0]}  
                  alt={product.name}
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                  {product.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">${product.price}</p>
                <button
                  onClick={() => addToCart(product)} 
                  className="mt-4 w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
