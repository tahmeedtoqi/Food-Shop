import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Search } from 'lucide-react';
import { categories } from '../data/categories';
import { menuItems } from '../data/menu-items';
import FoodCard from '../components/menu/FoodCard';
import CategoryCard from '../components/menu/CategoryCard';
import Input from '../components/ui/Input';
import { MenuItem } from '../types';

const MenuPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId?: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(categoryId);

  useEffect(() => {
    setSelectedCategory(categoryId);
    
    let items = menuItems;
    
    // Filter by category if selected
    if (categoryId) {
      items = items.filter(item => item.category === categoryId);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      items = items.filter(
        item => 
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    setFilteredItems(items);
  }, [categoryId, searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">Our Menu</h1>
          <p className="text-secondary-600 mb-6">
            Browse our selection of delicious food and drinks
          </p>
          
          <div className="max-w-md mb-8">
            <Input
              type="text"
              placeholder="Search for food..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="pr-10"
              icon={<Search className="h-5 w-5 text-secondary-500" />}
            />
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
            {categories.map((category) => (
              <CategoryCard 
                key={category.id} 
                category={category} 
                selected={category.id === selectedCategory}
              />
            ))}
          </div>
          
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <FoodCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-secondary-900 mb-2">No items found</h3>
              <p className="text-secondary-600">
                Try adjusting your search or category selection
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MenuPage;