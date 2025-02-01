
'use client';

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // ✅ Use useParams instead of useRouter
import { motion } from "framer-motion";
import { Minus, Plus, ShoppingCart, Heart } from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams(); // ✅ Get product ID correctly
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showAlert, setShowAlert] = useState(false); // State to manage the alert visibility

  useEffect(() => {
    if (!id) return;

    fetch("/products.json")
      .then((res) => res.json())
      .then((data) => {
        const foundProduct = data.find((item) => item.id.toString() === id); // ✅ Ensure ID matches as a string
        setProduct(foundProduct);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  const updateQuantity = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const addToCart = () => {
    // Retrieve existing cart data from localStorage
    const existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // Check if the product already exists in the cart
    const existingProductIndex = existingCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // If it exists, update the quantity
      existingCart[existingProductIndex].quantity += quantity;
    } else {
      // If it doesn't exist, add the new product to the cart
      existingCart.push({
        ...product,
        size: selectedSize,
        color: selectedColor,
        quantity,
        image: product.images?.[selectedImage] || "/fallback-image.jpg", // Save image
      });
    }

    // Save the updated cart back to localStorage
    localStorage.setItem("cartItems", JSON.stringify(existingCart));

    // Show the alert with animation
    setShowAlert(true);

    // Hide the alert after 3 seconds
    setTimeout(() => setShowAlert(false), 3000);
  };

  if (!product) {
    return <p className="text-center py-10">Loading product details...</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
            <img
              src={product?.images?.[selectedImage] || "/fallback-image.jpg"}
              alt={product?.name || "Product Image"}
              className="w-full h-[400px] object-cover"
            />
          </motion.div>
          <div className="flex gap-4">
            {product?.images?.length > 0 ? (
              product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
                    selectedImage === index ? "border-primary" : "border-transparent"
                  }`}
                >
                  <img src={image} alt={`${product?.name} ${index + 1}`} className="w-full h-[300px] object-cover" />
                </button>
              ))
            ) : (
              <p>No images available</p>
            )}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl mb-6">${product.price}</p>
          <p className="text-muted-foreground mb-8">{product.description}</p>

          <div className="space-y-6">
            {/* Sizes */}
            {product?.sizes?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-md border ${
                        selectedSize === size ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Colors */}
            {product?.colors?.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-md border ${
                        selectedColor === color ? "bg-primary text-primary-foreground" : "hover:bg-muted"
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <button onClick={() => updateQuantity(-1)} className="p-2 hover:bg-muted rounded">
                  <Minus size={20} />
                </button>
                <span className="w-12 text-center text-lg">{quantity}</span>
                <button onClick={() => updateQuantity(1)} className="p-2 hover:bg-muted rounded">
                  <Plus size={20} />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex justify-between text-center item-center gap-4">
              <button
                onClick={addToCart}
                className="mt-4 w-[300px] py-3 flex content-center justify-center items-center bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button className=" w-[100px] flex justify-center items-center  rounded-md hover:bg-muted">
                <Heart size={30} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Message */}
      {showAlert && (
        <motion.div
          className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          Product added to cart!
        </motion.div>
      )}
    </div>
  );
}
