'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Minus, Plus, ShoppingCart, Heart } from 'lucide-react';

export default function ProductDetails({ product }) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  const updateQuantity = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
          </motion.div>
          <div className="flex gap-4">
            {product.images.map((image, index) => (
              <button key={index} onClick={() => setSelectedImage(index)} className={`w-20 h-20 border-2 ${selectedImage === index ? 'border-primary' : 'border-transparent'}`}>
                <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-2xl mb-6">${product.price}</p>
          <p className="text-muted-foreground mb-8">{product.description}</p>

          <div className="space-y-6">
            {/* Sizes */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`px-4 py-2 rounded-md border ${selectedSize === size ? 'bg-primary text-white' : 'hover:bg-gray-200'}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-semibold mb-3">Color</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <button key={color} onClick={() => setSelectedColor(color)} className={`px-4 py-2 rounded-md border ${selectedColor === color ? 'bg-primary text-white' : 'hover:bg-gray-200'}`}>
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button onClick={() => updateQuantity(-1)} className="p-2 hover:bg-gray-200 rounded">
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center text-lg">{quantity}</span>
                <button onClick={() => updateQuantity(1)} className="p-2 hover:bg-gray-200 rounded">
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Add to Cart & Wishlist */}
            <div className="flex gap-4">
              <button className="flex-grow inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-white rounded-md hover:opacity-90">
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className="p-3 border rounded-md hover:bg-gray-200">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
