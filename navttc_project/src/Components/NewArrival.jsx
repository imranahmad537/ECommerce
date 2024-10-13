// import React from 'react';
// import n_img1 from '../assets/n_img1.png'
// import n_img2 from '../assets/n_img2.png'
// import n_img3 from '../assets/n_img3.png'
// import n_img4 from '../assets/n_img4.png'

// const NewArrival = () => {
//   return (
//     <section className="py-10 flex flex-col items-center">
//       {/* Heading */}
//       <div className="my-8 p-3 max-w-7xl w-full">
//         <div className="flex items-center mb-6">
//           {/* Small red block */}
//           <div className="w-4 h-8 bg-red-500 mr-2"></div>
//           <h4 className="text-black-700">Featured Products</h4>
//         </div>
//         <h2 className="font-bold text-2xl mb-6">New Arrivals</h2> {/* Added H2 for New Arrivals */}
//       </div>

//       <div className="flex flex-col md:flex-row max-w-6xl w-full px-4">
//         {/* Large Image on the Left with PlayStation 5 background */}
//         <div className="relative md:w-1/2 pr-2 overflow-hidden">
//           <div
//             className="w-full h-full bg-cover bg-center bg-black"
//             style={{
//               backgroundImage: "url('https://images.unsplash.com/photo-1607431930572-1159b87d7d38')",
//             }}
//           >
//             <img 
//               src={n_img3}
//               alt="Play Station 5" 
//               className="w-full h-full object-cover opacity-100" // Hidden but maintains size for background
//             />
//             <div className="absolute bottom-0 left-0 right-0 text-white p-2">
//               <h3 className="text-sm font-bold">Play Station 5</h3>
//               <h6 className="text-xs">Black & White version of PS5</h6>
//               <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
//                 Shop Now
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Right Side for Smaller Images */}
//         <div className="flex flex-col md:w-1/2">
//           <div className="flex pb-1">
//             {/* Small Image 1 with Women Black Image background */}
//             <div className="relative w-1/2 overflow-hidden">
//               <div
//                 className="w-full h-full bg-cover bg-center bg-black"
//                 style={{
//                   backgroundImage: "url('https://images.unsplash.com/photo-1504203683905-4591f8e07472')",
//                 }}
//               >
//                 <img 
//                   src={n_img4}
//                   alt="New Arrival 1" 
//                   className="w-full h-full object-cover opacity-100" // Hidden but maintains size for background
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 text-white p-2">
//                   <h3 className="text-sm font-bold">Women Collection</h3>
//                   <h6 className="text-xs">Featured Women Collection</h6>
//                   <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
//                     Shop Now
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Small Image 2 with Black Speaker background */}
//             <div className="relative w-1/2 overflow-hidden pl-1">
//               <div
//                 className="w-full h-full bg-cover bg-center bg-black"
//                 style={{
//                   backgroundImage: "url('https://images.unsplash.com/photo-1504402922402-6eb1f2b93e86')",
//                 }}
//               >
//                 <img 
//                   src={n_img2}
//                   alt="New Arrival 2" 
//                   className="w-full h-full object-cover opacity-100" // Hidden but maintains size for background
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 text-white p-2">
//                   <h3 className="text-sm font-bold">Speakers </h3>
//                   <h6 className="text-xs">Amazon Wireless Speaker</h6>
//                   <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
//                     Shop Now
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Fourth Image for Remaining Space with Gucci Perfume background */}
//           <div className="relative w-full overflow-hidden">
//             <div
//               className="w-full h-full bg-cover bg-center bg-black"
//               style={{
//                 backgroundImage: "url('https://images.unsplash.com/photo-1526391272460-62b2a7e0b0fc')",
//               }}
//             >
//               <img 
//                 src={n_img1} 
//                 alt="New Arrival 3" 
//                 className="w-full h-full object-cover opacity-100" // Hidden but maintains size for background
//               />
//               <div className="absolute bottom-0 left-0 right-0 text-white p-2">
//                 <h3 className="text-sm font-bold">Perfumes</h3>
//                 <h6 className="text-xs">GUCCI INTENSE OUD EDP</h6>
//                 <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
//                   Shop Now
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default NewArrival;

// // import React from 'react';

// // const NewArrival = () => {
// //   return (
// //     <section className="py-10 flex flex-col items-center">
// //       {/* Heading */}
// //       <div className="my-8 p-3 max-w-7xl w-full">
// //         <div className="flex items-center mb-6">
// //           {/* Small red block */}
// //           <div className="w-4 h-8 bg-red-500 mr-2"></div>
// //           <h4 className="text-black-700">Featured Products</h4>
// //         </div>
// //         <h2 className="font-bold text-2xl mb-6">New Arrivals</h2> {/* Added H2 for New Arrivals */}
// //       </div>

// //       <div className="flex flex-col md:flex-row max-w-6xl w-full px-4">
// //         {/* Large Image on the Left */}
// //         <div className="relative md:w-1/2 pr-2 overflow-hidden">
// //           <img 
// //             src="https://via.placeholder.com/600x400" 
// //             alt="Play Station 5" 
// //             className="w-full h-full object-cover"
// //           />
// //           <div className="absolute bottom-0 left-0 right-0 text-white p-2">
// //             <h3 className="text-sm font-bold">Play Station 5</h3>
// //             <h6 className="text-xs">Some description text about the product.</h6>
// //             <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
// //               Shop Now
// //             </a>
// //           </div>
// //         </div>

// //         {/* Right Side for Smaller Images */}
// //         <div className="flex flex-col md:w-1/2">
// //           <div className="flex pb-1">
// //             {/* Small Image 1 */}
// //             <div className="relative w-1/2 overflow-hidden">
// //               <img 
// //                 src="https://via.placeholder.com/300x200" 
// //                 alt="New Arrival 1" 
// //                 className="w-full h-[250px] object-cover" // Fixed height for uniformity
// //               />
// //               <div className="absolute bottom-0 left-0 right-0 text-white p-2">
// //                 <h3 className="text-sm font-bold">New Arrival 1</h3>
// //                 <h6 className="text-xs">Some description text about the product.</h6>
// //                 <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
// //                   Shop Now
// //                 </a>
// //               </div>
// //             </div>

// //             {/* Small Image 2 */}
// //             <div className="relative w-1/2 overflow-hidden pl-1">
// //               <img 
// //                 src="https://via.placeholder.com/300x200" 
// //                 alt="New Arrival 2" 
// //                 className="w-full h-[250px] object-cover" // Fixed height for uniformity
// //               />
// //               <div className="absolute bottom-0 left-0 right-0 text-white p-2">
// //                 <h3 className="text-sm font-bold">New Arrival 2</h3>
// //                 <h6 className="text-xs">Some description text about the product.</h6>
// //                 <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
// //                   Shop Now
// //                 </a>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Fourth Image for Remaining Space */}
// //           <div className="relative w-full overflow-hidden">
// //             <img 
// //               src="https://via.placeholder.com/600x300" 
// //               alt="New Arrival 3" 
// //               className="w-full h-[250px] object-cover" // Fixed height for uniformity
// //             />
// //             <div className="absolute bottom-0 left-0 right-0 text-white p-2">
// //               <h3 className="text-sm font-bold">New Arrival 3</h3>
// //               <h6 className="text-xs">Some description text about the product.</h6>
// //               <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
// //                 Shop Now
// //               </a>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default NewArrival;

import React from 'react';
import n_img1 from '../assets/n_img1.png';
import n_img2 from '../assets/n_img2.png';
import n_img3 from '../assets/n_img3.png';
import n_img4 from '../assets/n_img4.png';

const NewArrival = () => {
  return (
    <section className="py-10 flex flex-col items-center">
      {/* Heading */}
      <div className="my-8 p-3 max-w-7xl w-full">
        <div className="flex items-center mb-6">
          {/* Small red block */}
          <div className="w-4 h-8 bg-red-500 mr-2"></div>
          <h4 className="text-black-700">Featured Products</h4>
        </div>
        <h2 className="font-bold text-2xl mb-6">New Arrivals</h2>
      </div>

      <div className="flex flex-col md:flex-row max-w-6xl w-full px-4">
        {/* Large Image on the Left */}
        <div className="relative md:w-1/2 pr-2  overflow-hidden">
          <div className="bg-black p-6">
            <img 
              src={n_img3}
              alt="Play Station 5" 
              className="w-full h-auto object-contain" // Use object-contain to prevent cropping
              style={{ maxHeight: '300px' }} // Adjust height for visibility
            />
            <div className="absolute bottom-0 left-0 right-0 text-white p-2">
              <h3 className="text-sm font-bold">Play Station 5</h3>
              <h6 className="text-xs">Black & White version of PS5</h6>
              <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* Right Side for Smaller Images */}
        <div className="flex flex-col md:w-1/2">
          <div className="flex pb-1">
            {/* Small Image 1 */}
            <div className="relative w-1/2 overflow-hidden">
              <div className="bg-black p-2">
                <img 
                  src={n_img4}
                  alt="New Arrival 1" 
                  className="w-full h-auto object-contain" // Use object-contain to prevent cropping
                  style={{ maxHeight: '150px' }} // Smaller height
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-2">
                  <h3 className="text-sm font-bold">Women Collection</h3>
                  <h6 className="text-xs">Featured Women Collection</h6>
                  <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>

            {/* Small Image 2 */}
            <div className="relative w-1/2 overflow-hidden pl-1">
              <div className="bg-black p-2">
                <img 
                  src={n_img2}
                  alt="New Arrival 2" 
                  className="w-full h-auto object-contain" // Use object-contain to prevent cropping
                  style={{ maxHeight: '150px' }} // Smaller height
                />
                <div className="absolute bottom-0 left-0 right-0 text-white p-2">
                  <h3 className="text-sm font-bold">Speakers</h3>
                  <h6 className="text-xs">Amazon Wireless Speaker</h6>
                  <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Image for Remaining Space */}
          <div className="relative w-full overflow-hidden">
            <div className="bg-black p-2">
              <img 
                src={n_img1} 
                alt="New Arrival 3" 
                className="w-full h-auto object-contain" // Use object-contain to prevent cropping
                style={{ maxHeight: '150px' }} // Smaller height
              />
              <div className="absolute bottom-0 left-0 right-0 text-white p-2">
                <h3 className="text-sm font-bold">Perfumes</h3>
                <h6 className="text-xs">GUCCI INTENSE OUD EDP</h6>
                <a href="#" className="inline-block bg-red-600 text-white py-1 px-3 mt-2 rounded text-xs">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
