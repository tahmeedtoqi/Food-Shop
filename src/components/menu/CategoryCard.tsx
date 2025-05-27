import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';
import { Card } from '../ui/Card';
import { cn } from '../../lib/utils';

interface CategoryCardProps {
  category: Category;
  selected?: boolean;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, selected = false }) => {
  return (
    <Link to={`/menu/${category.id}`}>
      <Card 
        hoverable 
        className={cn(
          'relative overflow-hidden h-32 flex items-end justify-center group',
          selected && 'ring-2 ring-primary-500'
        )}
      >
        <img
          src={category.image}
          alt={category.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="relative p-3 text-white text-center w-full">
          <h3 className="font-bold text-lg">{category.name}</h3>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;