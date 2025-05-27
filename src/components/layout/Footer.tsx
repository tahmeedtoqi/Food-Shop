import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { restaurantInfo } from '../../data/restaurant';

const Footer = () => {
  return (
    <footer className="bg-secondary-900 text-secondary-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">{restaurantInfo.name}</h3>
            <p className="text-sm">{restaurantInfo.description.split('.')[0]}.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-secondary-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/menu" className="text-secondary-400 hover:text-white transition-colors">
                  Menu
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary-400 mr-2 mt-0.5" />
                <span className="text-secondary-300">{restaurantInfo.address}</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary-400 mr-2" />
                <span className="text-secondary-300">{restaurantInfo.phone}</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-secondary-400 mr-2" />
                <span className="text-secondary-300">{restaurantInfo.email}</span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Opening Hours</h4>
            <ul className="space-y-2">
              {restaurantInfo.openingHours.map((hours, index) => (
                <li key={index} className="text-secondary-300">
                  <span className="font-medium">{hours.day}:</span> {hours.hours}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-800 mt-10 pt-6 text-center text-secondary-400 text-sm">
          <p>&copy; {new Date().getFullYear()} {restaurantInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;