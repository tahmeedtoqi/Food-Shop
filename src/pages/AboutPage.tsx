import React from 'react';
import { restaurantInfo } from '../data/restaurant';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">About Us</h1>
          <p className="text-lg text-secondary-600">
            Get to know the story behind {restaurantInfo.name} and our commitment to quality food and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={restaurantInfo.image}
              alt={restaurantInfo.name}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">Our Story</h2>
            <p className="text-secondary-700 mb-6">
              {restaurantInfo.description}
            </p>
            <p className="text-secondary-700 mb-6">
              Founded with a passion for creating memorable dining experiences, our journey began in 2015 with a simple mission: to serve delicious, high-quality food that brings people together.
            </p>
            <p className="text-secondary-700">
              Today, we continue to uphold our commitment to culinary excellence, exceptional service, and creating a welcoming environment for all our guests, whether dining in or ordering for delivery.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-card text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img
                src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Team"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Our Team</h3>
            <p className="text-secondary-700">
              A diverse group of passionate culinary professionals dedicated to creating exceptional dining experiences.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img
                src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Ingredients"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Fresh Ingredients</h3>
            <p className="text-secondary-700">
              We source only the freshest, highest-quality ingredients from local suppliers whenever possible.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-card text-center">
            <div className="bg-primary-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our Values"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-bold text-secondary-900 mb-2">Our Values</h3>
            <p className="text-secondary-700">
              Quality, sustainability, community, and innovation are at the heart of everything we do.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6 text-center">Find Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-secondary-900 mb-1">Address</h3>
                  <p className="text-secondary-700">{restaurantInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-secondary-900 mb-1">Phone</h3>
                  <p className="text-secondary-700">{restaurantInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-secondary-900 mb-1">Email</h3>
                  <p className="text-secondary-700">{restaurantInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-secondary-900 mb-1">Hours</h3>
                  {restaurantInfo.openingHours.map((hours, index) => (
                    <p key={index} className="text-secondary-700">
                      <span className="font-medium">{hours.day}:</span> {hours.hours}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden h-64">
              {/* This would be a map in a real application */}
              <div className="w-full h-full bg-secondary-100 flex items-center justify-center">
                <p className="text-secondary-500">Map would be displayed here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;