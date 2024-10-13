import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const Features = () => {
  return (
    <section className="py-10 mt-10 mb-10 flex flex-col items-center">
      {/* <h2 className="text-2xl m-10 font-bold mb-6 text-center">Our Features</h2> */}
      <div className="flex justify-center space-x-8">
        {/* Circle 1: Delivery */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-black border-4 border-gray-400 rounded-full">
            <FontAwesomeIcon icon={faTruck} className="text-white text-3xl" />
          </div>
          <strong className="mt-4">Free and Fast Delivery</strong>
          <h5 className="mt-1 text-sm">Free delivery for all orders over $140</h5>
        </div>

        {/* Circle 2: Customer Service */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-black border-4 border-gray-400 rounded-full">
            <FontAwesomeIcon icon={faHeadset} className="text-white text-3xl" />
          </div>
          <strong className="mt-4">24/7 Customer Service</strong>
          <h5 className="mt-1 text-sm">Friendly 24/7 customer support</h5>
        </div>

        {/* Circle 3: Money Back Guarantee */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 flex items-center justify-center bg-black border-4 border-gray-400 rounded-full">
            <FontAwesomeIcon icon={faShieldAlt} className="text-white text-3xl" />
          </div>
          <strong className="mt-4">Money Back Guarantee</strong>
          <h5 className="mt-1 text-sm">We return money within 30 days</h5>
        </div>
      </div>
    </section>
  );
};

export default Features;
