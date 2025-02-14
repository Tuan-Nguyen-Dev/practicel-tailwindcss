import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-lg font-bold flex items-center gap-2">
            <img
              src="/assets/images/logo.png"
              alt="LaslesVPN"
              className="w-6 h-6"
            />
            LaslesVPN
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            LaslesVPN is a private virtual network that has unique features and
            has high security.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="text-gray-600 hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
          <p className="text-gray-400 text-xs mt-4">©2020 LaslesVPN</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Product</h3>
          <ul className="text-gray-500 text-sm mt-2 space-y-2">
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Server</a>
            </li>
            <li>
              <a href="#">Countries</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Engage</h3>
          <ul className="text-gray-500 text-sm mt-2 space-y-2">
            <li>
              <a href="#">LaslesVPN ?</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Tutorials</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Earn Money</h3>
          <ul className="text-gray-500 text-sm mt-2 space-y-2">
            <li>
              <a href="#">Affiliate</a>
            </li>
            <li>
              <a href="#">Become Partner</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
