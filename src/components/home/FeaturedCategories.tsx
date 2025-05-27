import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';
import CategoryCard from '../menu/CategoryCard';

const FeaturedCategories: React.FC = () => {
  // Get first 4 categories to display
  const featuredCategories = categories.slice(0, 4);

  return (
    <section className="py-16 bg-secondary-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-secondary-900">Food Categories</h2>
            <p className="text-secondary-600 mt-2">
              Explore our diverse menu offerings
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredCategories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;