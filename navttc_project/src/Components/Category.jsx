import React from "react";
import { FaHeart, FaEye } from "react-icons/fa";
import c_img1 from '../assets/c_img1.png';
import c_img2 from '../assets/c_img2.png';
import c_img3 from '../assets/c_img3.png';
import c_img4 from '../assets/c_img4.png';

const Category = () => {
  return (
    <div className="my-8 p-3">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-center mb-6">
          {/* Small red block */}
          <div className="w-3 h-8 bg-red-500 mr-2"></div>
          <h4 className="text-black-700">Flash Sale</h4>
        </div>
        <h2 className="font-bold text-2xl mb-6">Today's Deals</h2>
        <div className="flex justify-center space-x-8">
          {[
            { img: c_img1, name: "Product 1", price: "$19.99", originalPrice: "$29.99", rating: 4, ratingCount: 33 },
            { img: c_img2, name: "Product 2", price: "$24.99", originalPrice: "$34.99", rating: 5, ratingCount: 45 },
            { img: c_img3, name: "Product 3", price: "$29.99", originalPrice: "$39.99", rating: 3, ratingCount: 12 },
            { img: c_img4, name: "Product 4", price: "$34.99", originalPrice: "$44.99", rating: 4, ratingCount: 20 },
          ].map((product, index) => (
            <div key={index} className="flex flex-col items-center w-64 rounded-md overflow-hidden shadow-md hover:shadow-lg group cursor-pointer">
              <div className="relative w-full">
                <img
                  src={product.img}
                  alt={`Product ${index + 1}`}
                  className="w-32 h-32 object-contain mx-auto"
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
              <div className="flex flex-col items-start p-4">
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <span className="font-bold text-lg text-red-500 mb-1">{product.price}</span>
                <span className="text-sm line-through text-gray-500 mb-2">{product.originalPrice}</span>
                <div className="flex items-center mb-2">
                  {[...Array(product.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l-5.5 2.9 1.1-5.8L0 7.5l6-0.9L10 1l3.9 4.6 6 0.9-4.6 4.6 1.1 5.8L10 15z" />
                    </svg>
                  ))}
                  <span className="text-sm text-gray-600 ml-2">({product.ratingCount})</span>
                </div>
              </div>
              {/* <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                <button className="w-full" style={{ backgroundColor: '#DB4444', color: 'white' }}>
                  Add to Cart
                </button>
              </div> */}
            </div>
          ))}
        </div>
        <button className="mt-6 mx-auto block bg-[#DB4444] hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default Category;



// import React from "react";
// import { FaHeart, FaEye } from "react-icons/fa"; // Importing icons
// import c_img1 from '../assets/c_img1.png'
// import c_img2 from '../assets/c_img2.png'
// import c_img3 from '../assets/c_img3.png'
// import c_img4 from '../assets/c_img4.png'

// const Category = () => {
//   // let images = [c_img2,c_img3,c_img4]
//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-2xl font-bold mb-4">Product Gallery</h2> {/* Heading */}
//       <div className="flex justify-center space-x-8">
//         {Array(4).fill().map((_, index) => (
//           <div key={index} className="relative w-64 rounded-md overflow-hidden shadow-md hover:shadow-lg group">
//             <div className="relative p-8">
//               {/* <img
//                 className="w-full h-40 object-cover"
//                 src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
//                 alt="Product"
//               /> */}
//               <img src={c_img1} alt="image1" />
//               {/* <img src={c_img2} alt="image1" />
//               <img src={c_img3} alt="image1" />
//               <img src={c_img4} alt="image1" />
//               */}
//               <button className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
//                 -40%
//               </button>
//               <div className="absolute top-2 right-2 flex flex-col space-y-1">
//                 <button className="bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100">
//                   <FaHeart className="text-gray-600" />
//                 </button>
//                 <button className="bg-white border border-gray-300 rounded-full p-1 shadow hover:bg-gray-100">
//                   <FaEye className="text-gray-600" />
//                 </button>
//               </div>
//             </div>
//             <div className="p-4">
//               <h3 className="text-lg font-medium mb-2">Product Name</h3>
//               <span className="font-bold text-lg mb-2">$19.99</span>
//               <div className="flex items-center">
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M10 15l-5.5 2.9 1.1-5.8L0 7.5l6-0.9L10 1l3.9 4.6 6 0.9-4.6 4.6 1.1 5.8L10 15z" />
//                   </svg>
//                 ))}
//               </div>
//             </div>
//             <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
//               <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2">
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
//         View All Products
//       </button> {/* Center bottom button */}
//     </div>
//   );
// };

// export default Category;


// // import React from "react";
// // import "./Category.css";

// // const Category = () => {
// //   return (
// //     <>
// //       <div className="flex justify-center space-x-4">
// //         {Array(4).fill().map((_, index) => (
// //           <div key={index} className="relative w-64 rounded-md overflow-hidden shadow-md hover:shadow-lg group">
// //             <div className="relative">
// //               <img
// //                 className="w-full"
// //                 src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
// //                 alt="Product Image"
// //               />
// //               <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
// //                 SALE
// //               </div>
// //             </div>
// //             <div className="p-4">
// //               <h3 className="text-lg font-medium mb-2">Product Title</h3>
// //               <p className="text-gray-600 text-sm mb-4">
// //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
// //                 vitae ante vel eros fermentum faucibus.
// //               </p>
// //               <div className="flex items-center justify-between">
// //                 <span className="font-bold text-lg">$19.99</span>
// //                 <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
// //                   Buy Now
// //                 </button>
// //               </div>
// //             </div>
// //             <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
// //               <button className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2">
// //                 Add to Cart
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default Category;

// // import React from "react";
// // import "./Category.css";
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// // // import { fas, far, fal, fass, fasds } from '@awesome.me/kit-KIT_CODE/icons'

// // const Category = () => {
// //   return (
// //     <>
// //       <div class="flex justify-center space-x-4">
// //         <div class="w-64 rounded-md overflow-hidden shadow-md hover:shadow-lg">
// //           <div class="relative">
// //             <img
// //               class="w-full"
// //               src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
// //               alt="Product Image"
// //             />
// //             <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
// //               SALE
// //             </div>
// //           </div>
// //           <div class="p-4">
// //             <h3 class="text-lg font-medium mb-2">Product Title</h3>
// //             <p class="text-gray-600 text-sm mb-4">
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
// //               vitae ante vel eros fermentum faucibus.
// //             </p>
// //             <div class="flex items-center justify-between">
// //               <span class="font-bold text-lg">$19.99</span>
// //               <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
// //                 Buy Now
// //               </button>
// //             </div>
// //           </div>
// //           <div className="absolute bottom-0 left-0 right-0 bg-black text-white text-center py-2 transform translate-y-full transition-transform duration-300 hover:translate-y-0">
// //             <button className=" bg-black hover:bg-gray-800 text-white font-bold py-2">
// //               Add to Cart
// //             </button>
// //           </div>
// //         </div>

// //         <div class="w-64 rounded-md overflow-hidden shadow-md hover:shadow-lg">
// //           <div class="relative">
// //             <img
// //               class="w-full"
// //               src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
// //               alt="Product Image"
// //             />
// //             <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
// //               SALE
// //             </div>
// //           </div>
// //           <div class="p-4">
// //             <h3 class="text-lg font-medium mb-2">Product Title</h3>
// //             <p class="text-gray-600 text-sm mb-4">
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
// //               vitae ante vel eros fermentum faucibus.
// //             </p>
// //             <div class="flex items-center justify-between">
// //               <span class="font-bold text-lg">$19.99</span>
// //               <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
// //                 Buy Now
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         <div class="w-64 rounded-md overflow-hidden shadow-md hover:shadow-lg">
// //           <div class="relative">
// //             <img
// //               class="w-full"
// //               src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
// //               alt="Product Image"
// //             />
// //             <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
// //               SALE
// //             </div>
// //           </div>
// //           <div class="p-4">
// //             <h3 class="text-lg font-medium mb-2">Product Title</h3>
// //             <p class="text-gray-600 text-sm mb-4">
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
// //               vitae ante vel eros fermentum faucibus.
// //             </p>
// //             <div class="flex items-center justify-between">
// //               <span class="font-bold text-lg">$19.99</span>
// //               <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
// //                 Buy Now
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         <div class="w-64 rounded-md overflow-hidden shadow-md hover:shadow-lg">
// //           <div class="relative">
// //             <img
// //               class="w-full"
// //               src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
// //               alt="Product Image"
// //             />
// //             <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
// //               SALE
// //             </div>
// //           </div>
// //           <div class="p-4">
// //             <h3 class="text-lg font-medium mb-2">Product Title</h3>
// //             <p class="text-gray-600 text-sm mb-4">
// //               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
// //               vitae ante vel eros fermentum faucibus.
// //             </p>
// //             <div class="flex items-center justify-between">
// //               <span class="font-bold text-lg">$19.99</span>
// //               <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
// //                 Buy Now
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default Category;
