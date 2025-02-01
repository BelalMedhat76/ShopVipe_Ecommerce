// "use client"
// export async function generateStaticParams() {
//   const res = await fetch('/products.json');
//   const products = await res.json();
  
//   return products.map(product => ({
//     id: product.id.toString(),
//   }));
// }

// import { useState, useEffect } from 'react'; 
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import { Minus, Plus, ShoppingCart, Heart } from 'lucide-react';

// export default function ProductDetails() {
//   const router = useRouter();
//   const { id } = router.query; // Get product ID from URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     if (!id) return;
    
//     // Fetch product details based on the ID
//     fetch('/products.json')
//       .then((res) => res.json())
//       .then((data) => {
//         const foundProduct = data.find((item) => item.id === parseInt(id));
//         setProduct(foundProduct);
//       })
//       .catch((err) => console.error('Error fetching product:', err));
//   }, [id]);

//   if (!product) {
//     return <p className="text-center py-10">Loading product details...</p>;
//   }

//   const [selectedSize, setSelectedSize] = useState('');
//   const [selectedColor, setSelectedColor] = useState('');
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(0);

//   const updateQuantity = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//         <div className="space-y-4">
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden"
//           >
//             <img
//               src={product.images[selectedImage]}
//               alt={product.name}
//               className="w-full h-full object-cover"
//             />
//           </motion.div>
//           <div className="flex gap-4">
//             {product.images.map((image, index) => (
//               <button
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`w-20 h-20 rounded-md overflow-hidden border-2 ${
//                   selectedImage === index ? 'border-primary' : 'border-transparent'
//                 }`}
//               >
//                 <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
//               </button>
//             ))}
//           </div>
//         </div>

//         <div>
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-2xl mb-6">${product.price}</p>
//           <p className="text-muted-foreground mb-8">{product.description}</p>

//           <div className="space-y-6">
//             <div>
//               <h3 className="font-semibold mb-3">Size</h3>
//               <div className="flex flex-wrap gap-2">
//                 {product.sizes.map((size) => (
//                   <button
//                     key={size}
//                     onClick={() => setSelectedSize(size)}
//                     className={`px-4 py-2 rounded-md border ${
//                       selectedSize === size ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
//                     }`}
//                   >
//                     {size}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-3">Color</h3>
//               <div className="flex flex-wrap gap-2">
//                 {product.colors.map((color) => (
//                   <button
//                     key={color}
//                     onClick={() => setSelectedColor(color)}
//                     className={`px-4 py-2 rounded-md border ${
//                       selectedColor === color ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
//                     }`}
//                   >
//                     {color}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3 className="font-semibold mb-3">Quantity</h3>
//               <div className="flex items-center gap-4">
//                 <button
//                   onClick={() => updateQuantity(-1)}
//                   className="p-2 hover:bg-muted rounded"
//                 >
//                   <Minus size={20} />
//                 </button>
//                 <span className="w-12 text-center text-lg">{quantity}</span>
//                 <button
//                   onClick={() => updateQuantity(1)}
//                   className="p-2 hover:bg-muted rounded"
//                 >
//                   <Plus size={20} />
//                 </button>
//               </div>
//             </div>

//             <div className="flex gap-4">
//               <button className="flex-grow inline-flex justify-center items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
//                 <ShoppingCart size={20} />
//                 Add to Cart
//               </button>
//               <button className="p-3 border rounded-md hover:bg-muted">
//                 <Heart size={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





export async function generateStaticParams() {
  const res = await fetch('http://localhost:3000/products.json'); // Use absolute URL
  const products = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

import ProductDetails from "./ProductDetails";

export default async function ProductPage({ params }) {
  const { id } = params;

  // Fetch product data on the server
  const res = await fetch('http://localhost:3000/products.json'); // Use absolute URL
  const products = await res.json();
  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return <p className="text-center py-10">Product not found</p>;
  }

  return <ProductDetails product={product} />;
}

