
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useTheme } from 'next-themes';
// import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [mounted, setMounted] = useState(false);
//   const { theme, setTheme } = useTheme();

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-3xl ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <Link href="/" className="text-2xl font-bold">
//             ShopVibe
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             <Link href="/" className="hover:text-primary transition-colors">Home</Link>
//             <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
//             <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
//             <Link href="/about" className="hover:text-primary transition-colors">About</Link>

//             {/* Dark Mode Toggle */}
//             <button 
//               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//               className="p-2 rounded-lg hover:bg-muted transition-colors"
//             >
//               {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//             </button>

//             <Link href="/cart" className="relative">
//               <ShoppingCart size={20} />
//               <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                 0
//               </span>
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
//             {isOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, x: '-100%' }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: '-100%' }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden bg-background border-b"
//           >
//             <div className="px-4 pt-2 pb-3 space-y-1">
//               <Link href="/" className="block px-3 py-2 rounded-md hover:bg-muted transition-colors">Home</Link>
//               <Link href="/products" className="block px-3 py-2 rounded-md hover:bg-muted transition-colors">Products</Link>
//               <Link href="/categories" className="block px-3 py-2 rounded-md hover:bg-muted transition-colors">Categories</Link>
//               <Link href="/about" className="block px-3 py-2 rounded-md hover:bg-muted transition-colors">About</Link>

//               {/* Dark Mode Toggle (Mobile) */}
//               <div className="flex items-center justify-between px-3 py-2">
//                 <button 
//                   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//                   className="p-2 rounded-lg hover:bg-muted transition-colors"
//                 >
//                   {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
//                 </button>

//                 <Link href="/cart" className="relative">
//                   <ShoppingCart size={20} />
//                   <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                     0
//                   </span>
//                 </Link>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Menu, X, ShoppingCart, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [cartItemCount, setCartItemCount] = useState(0);

  // Read cart item count from localStorage when the component mounts
  useEffect(() => {
    setMounted(true);
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalProducts = new Set(cartItems.map(item => item.id)).size; // Count unique products
    setCartItemCount(totalProducts);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-3xl ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold">
            ShopVibe
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <Link href="/categories" className="hover:text-primary transition-colors">Categories</Link>
            <Link href="/about" className="hover:text-primary transition-colors">About</Link>

            {/* Dark Mode Toggle */}
            <button 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Cart with item count */}
            <Link href="/cart" className="relative">
  <ShoppingCart size={20} className='mr-6' />
  <span className="absolute -top-2 right-1 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
    {cartItemCount > 0 ? cartItemCount : ""}
  </span>
</Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-b"
          >
            <div className="px-4 pt-2 pb-3 space-y-1">
              <Link href="/" className="block px-3 py-2 rounded-md hover:bg-muted transition-colors">Home</Link>
              <Link href="/products" className="block px-3 py-2 rounded-md hover:bg-muted transition-colors">Products</Link>
              <Link href="/categories" className="block px-3 py-2 rounded-md hover:bg-muted transition-colors">Categories</Link>
              <Link href="/about" className="block px-3 py-2 rounded-md hover:bg-muted transition-colors">About</Link>

              {/* Dark Mode Toggle (Mobile) */}
              <div className="flex items-center justify-between px-3 py-2">
                <button 
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2 rounded-lg hover:bg-muted transition-colors"
                >
                  {mounted && theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                {/* Cart with item count (Mobile) */}
                <Link href="/cart" className="relative">
  <ShoppingCart size={20} className='mr-6' />
  <span className="absolute -top-2 right-1 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-semibold">
    {cartItemCount > 0 ? cartItemCount : ""}
  </span>
</Link>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
