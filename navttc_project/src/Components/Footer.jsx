import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="container mx-auto p-20 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold">Imran</h2>
          <h3 className="text-lg">Subscribe</h3>
          <h6 className="text-sm">Get 20% off on your first order</h6>
          <div className="flex w-8">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow pb-2 border border-white rounded-l"
            />
            <button className="bg-white text-black p-2 rounded-r">
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold">Support</h4>
          <h6 className="text-sm">Main University Road, Peshawar</h6>
          <h6 className="text-sm">ahmadimrankh99@gmail.com</h6>
          <h6 className="text-sm">+923131240764</h6>
        </div>

        {/* Column 3 */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold">Account</h4>
          <h6 className="text-sm">My Account</h6>
          <h6 className="text-sm">Login/Register</h6>
          <h6 className="text-sm">Cart</h6>
          <h6 className="text-sm">Wishlist</h6>
          <h6 className="text-sm">Shop</h6>
        </div>

        {/* Column 4 */}
        <div className="space-y-2">

          <h4 className="text-lg font-bold">Privacy Terms</h4>
          <h6 className="text-sm">Privacy Policy</h6>
          <h6 className="text-sm">Terms of Use</h6>
          <h6 className="text-sm">FAQ</h6>
          <h6 className="text-sm">Contact Us</h6>
        </div>

        {/* Column 5 */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold">Download App</h4>
          <div className="flex items-center">
            <div className="mr-4">
              <img src="qr-code.png" alt="QR Code" className="w-20 h-20" /> {/* Replace with actual QR code */}
            </div>
            <div className="flex flex-col">
              <a href="#" className="mb-2">
                <img src="google-play-icon.png" alt="Google Play" className="w-32" /> {/* Replace with actual icon */}
              </a>
              <a href="#">
                <img src="apple-store-icon.png" alt="Apple Store" className="w-32" /> {/* Replace with actual icon */}
              </a>
            </div>
          </div>
          
        </div>
      </div>
      <div className="text-center text-bold text-md mt-8">
        <p>Developed by Imran Ahmad</p>
      </div>
      <div className="flex justify-center space-x-2 mt-4">
            <a href="https://www.facebook.com/share/DpT1ukwxAVFnRCZW/?mibextid=xfxF2i" className=" p-2 rounded-full">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://github.com/imranahmad537/" className="  p-2 rounded-full">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/imran-ahmad-968660271" className="  p-2 rounded-full">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
    </footer>
  );
};

export default Footer;
