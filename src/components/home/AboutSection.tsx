import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import { restaurantInfo } from '../../data/restaurant';

const AboutSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              About {restaurantInfo.name}
            </h2>
            <p className="text-secondary-700 mb-6">
              {restaurantInfo.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-primary-600">Quality Food</h3>
                <p className="text-sm text-secondary-600 mt-1">
                  We use only the freshest ingredients for all our dishes.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold text-lg text-primary-600">Fast Delivery</h3>
                <p className="text-sm text-secondary-600 mt-1">
                  Your food arrives hot and fresh in record time.
                </p>
              </div>
            </div>
            <Button 
              variant="primary" 
              onClick={() => navigate('/about')}
            >
              Learn More About Us
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img
                src={restaurantInfo.image}
                alt="Restaurant interior"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary-600 text-white p-4 rounded-lg shadow-lg">
                <p className="font-bold text-xl">10+</p>
                <p className="text-sm">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;