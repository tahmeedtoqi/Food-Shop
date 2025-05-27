import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { menuItems } from '../../data/menu-items';
import FoodCard from '../menu/FoodCard';

const PopularItems: React.FC = () => {
  // Get only popular items
  const popularItems = menuItems.filter(item => item.popular).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-secondary-900">Most Popular</h2>
            <p className="text-secondary-600 mt-2">
              Our customers' favorite dishes
            </p>
          </div>
          <Link
            to="/menu"
            className="flex items-center text-primary-600 hover:text-primary-700 transition-colors text-sm font-medium"
          >
            View All
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularItems.map((item) => (
            <FoodCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularItems;