import React from "react";
import { FaHeart, FaEye } from "react-icons/fa"; // Importing icons

const products = [
  {
    name: "Breed Dry Dog Food",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1555685812-1680f77b89de", // Replace with actual image URL
  },
  {
    name: "Canon Camera",
    price: "$499.99",
    image: "https://images.unsplash.com/photo-1516599641950-261008f75b43",
  },
  {
    name: "Asus Laptop",
    price: "$799.99",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    name: "Curology Product Set",
    price: "$59.99",
    image: "https://images.unsplash.com/photo-1607804602898-50f05fbe23f4",
  },
  {
    name: "Toy Car",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1523245071205-58d2c3e5bfa8",
  },
  {
    name: "Jr Zoom Soccer Cleats Shoes",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1517351190825-5a93b0e2ef3f",
  },
  {
    name: "GP11 Shooter USB Gamepad",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1585072568051-2cf49c5e7b8a",
  },
  {
    name: "Quilted Satin Jacket",
    price: "$89.99",
    image: "https://images.unsplash.com/photo-1579051962037-bcf5f2a4e700",
  },
];

const FeatureProducts = () => {
  return (
    <div className="my-8 p-3">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center mb-6">
          <div className="w-3 h-8 bg-red-500 mr-2 "></div>
          <h4 className="text-black-700">Featured Products</h4>
        </div>
        <h2 className="font-bold text-2xl mb-6">Explore Our Products</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="relative rounded-md overflow-hidden shadow-md hover:shadow-lg group">
              <div className="relative">
                <img
                  className="w-full h-40 object-cover"
                  src={product.image}
                  alt={product.name}
                  loading="lazy" // Lazy loading for better performance
                />
                <button className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                  -40%
                </button>
                <div className="absolute top-2 right-2 flex flex-col space-y-1">
                  <button className="bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100">
                    <FaHeart className="text-gray-600" />
                  </button>
                  <button className="bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100">
                    <FaEye className="text-gray-600" />
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium mb-2 text-left">{product.name}</h3>
                <span className="font-bold text-lg mb-2 text-red-500">{product.price}</span>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l-5.5 2.9 1.1-5.8L0 7.5l6-0.9L10 1l3.9 4.6 6 0.9-4.6 4.6 1.1 5.8L10 15z" />
                    </svg>
                  ))}
                  <span className="text-gray-500 ml-2 text-sm">(33)</span> {/* Smaller font size for rating count */}
                </div>
              </div>
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <button className="w-full bg-[#DB4444] hover:bg-red-600 text-white font-bold py-2">
                  Add to Cart
                </button>
              </div> */}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;

// import React from "react";
// import { FaHeart, FaEye } from "react-icons/fa"; // Importing icons

// const products = [
//   {
//     name: "Breed Dry Dog Food",
//     price: "$49.99",
//     image: "https://images.unsplash.com/photo-1555685812-1680f77b89de", // Replace with actual image URL
//   },
//   {
//     name: "Canon Camera",
//     price: "$499.99",
//     image: "https://images.unsplash.com/photo-1516599641950-261008f75b43",
//   },
//   {
//     name: "Asus Laptop",
//     price: "$799.99",
//     image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
//   },
//   {
//     name: "Curology Product Set",
//     price: "$59.99",
//     image: "https://images.unsplash.com/photo-1607804602898-50f05fbe23f4",
//   },
//   {
//     name: "Toy Car",
//     price: "$19.99",
//     image: "https://images.unsplash.com/photo-1523245071205-58d2c3e5bfa8",
//   },
//   {
//     name: "Jr Zoom Soccer Cleats Shoes",
//     price: "$39.99",
//     image: "https://images.unsplash.com/photo-1517351190825-5a93b0e2ef3f",
//   },
//   {
//     name: "GP11 Shooter USB Gamepad",
//     price: "$29.99",
//     image: "https://images.unsplash.com/photo-1585072568051-2cf49c5e7b8a",
//   },
//   {
//     name: "Quilted Satin Jacket",
//     price: "$89.99",
//     image: "https://images.unsplash.com/photo-1579051962037-bcf5f2a4e700",
//   },
// ];

// const FeatureProducts = () => {
//   return (
//     <div className="my-8 p-3">
//       <div className="max-w-7xl mx-auto p-6">
//         <div className="flex items-center mb-6">
//           <div className="w-3 h-8 bg-red-500 mr-2 "></div>
//           <h4 className="text-black-700">Featured Products</h4>
//         </div>
//         <h2 className="font-bold text-2xl mb-6">Explore Our Products</h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {products.map((product, index) => (
//             <div key={index} className="relative rounded-md overflow-hidden shadow-md hover:shadow-lg group">
//               <div className="relative">
//                 <img
//                   className="w-full h-40 object-cover"
//                   src={product.image}
//                   alt={product.name}
//                 />
//                 <button className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
//                   -40%
//                 </button>
//                 <div className="absolute top-2 right-2 flex flex-col space-y-1">
//                   <button className="bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100">
//                     <FaHeart className="text-gray-600" />
//                   </button>
//                   <button className="bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100">
//                     <FaEye className="text-gray-600" />
//                   </button>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-medium mb-2 text-left">{product.name}</h3>
//                 <span className="font-bold text-lg mb-2 text-red-500">{product.price}</span>
//                 <div className="flex items-center mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M10 15l-5.5 2.9 1.1-5.8L0 7.5l6-0.9L10 1l3.9 4.6 6 0.9-4.6 4.6 1.1 5.8L10 15z" />
//                     </svg>
//                   ))}
//                   <span className="text-gray-500 text-size-14">(33)</span>
//                 </div>
//               </div>
//               {/* <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
//                 <button className="w-full bg-[#DB4444] hover:bg-red-600 text-white font-bold py-2">
//                   Add to Cart
//                 </button>
//               </div> */}
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-6">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//             View All Products
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureProducts;

// import React from "react";
// import { FaHeart, FaEye } from "react-icons/fa"; // Importing icons

// const FeatureProducts = () => {
//   return (
//     <div className="my-8 p-3">
//       <div className="max-w-7xl mx-auto p-6">
//         <div className="flex items-center mb-6">
//         {/* Small red block */}
//           <div className="w-3 h-8 bg-red-500 mr-2 "></div>
//           <h4 className="text-black-700">Featured Products</h4>
//         </div>
//         <h2 className="font-bold text-2xl mb-6">Explore Our Products</h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {Array(8).fill().map((_, index) => (
//             <div key={index} className="relative rounded-md overflow-hidden shadow-md hover:shadow-lg group">
//               <div className="relative">
//                 <img
//                   className="w-full h-40 object-cover"
//                   src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
//                   alt="Product"
//                 />
//                 <button className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
//                   -40%
//                 </button>
//                 <div className="absolute top-2 right-2 flex flex-col space-y-1">
//                   <button className="bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100">
//                     <FaHeart className="text-gray-600" />
//                   </button>
//                   <button className="bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100">
//                     <FaEye className="text-gray-600" />
//                   </button>
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-medium mb-2">Product Name</h3>
//                 <span className="font-bold text-lg mb-2">$19.99</span>
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                       <path d="M10 15l-5.5 2.9 1.1-5.8L0 7.5l6-0.9L10 1l3.9 4.6 6 0.9-4.6 4.6 1.1 5.8L10 15z" />
//                     </svg>
//                   ))}
//                 </div>
//               </div>
//               <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
//                 <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-6">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//             View All Products
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeatureProducts;
