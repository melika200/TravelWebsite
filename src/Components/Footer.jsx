import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="bg-gray-800 p-4 text-white ">
        <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div>
             <h2 className="text-2xl font-bold mb-4">Travel Agency</h2>
             <p className="mb-4"> Your trusted partner for unforgettable travel experaince.Explore the world with us</p>
             </div>
            <div className="flex flex-col md:items-center">
                <h2 className="text-lg font-semibold">Quick Links</h2>
                <div className=" flex flex-col mt-4 space-y-2">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                </div>
            </div>
            <div>
                <h3 className=" mb-4">Follow Us</h3>
                <div className="flex flex-row space-x-4 mb-4">
                    <FaFacebookF size={24} className="text-blue-500 hover:text-blue-600"/>
                    <FaInstagram size={24} className="text-pink-500 hover:text-pink-600"/>
                    <FaTwitter size={24} className="text-blue-400 hover:text-blue-500"/>
                    <FaYoutube size={24} className="text-red-500 hover:text-red-600"/>
                </div>
                <form className="flex items-center justify-center mt-8">
                    <input type="email" placeholder="Enter your email" className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"/>
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-600">Subscribe</button>
                </form>
            </div>
        </div>
        <div className="flex justify-between mt-8 border-t border-gray-700 pt-4">
            <div className="flex justify-between ">
                <p>&copy; 2024 Travel Agency. All rights reserved.</p>
                <div>
                    <Link to="">Privacy Policy</Link>
                    <Link to="">Term Of Services</Link>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}