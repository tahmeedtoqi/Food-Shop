import React from 'react';
import { PlusCircle } from 'lucide-react';
import { MenuItem } from '../../types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/Card';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { formatCurrency, truncateText } from '../../lib/utils';
import { useCartStore } from '../../store/cartStore';

interface FoodCardProps {
  item: MenuItem;
}

const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const addToCart = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addToCart(item, 1);
  };

  return (
    <Card hoverable className="h-full flex flex-col overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {item.popular && (
          <div className="absolute top-2 right-2">
            <Badge variant="error" className="font-medium">Popular</Badge>
          </div>
        )}
      </div>
      <CardHeader className="flex-grow">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{item.name}</CardTitle>
          <span className="font-bold text-primary-600">{formatCurrency(item.price)}</span>
        </div>
        <p className="text-sm text-secondary-600 mt-2 line-clamp-2">
          {truncateText(item.description, 80)}
        </p>
      </CardHeader>
      <CardContent className="pb-0">
        <div className="flex flex-wrap gap-1">
          {item.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Button 
          variant="primary" 
          fullWidth 
          onClick={handleAddToCart}
          icon={<PlusCircle className="h-4 w-4" />}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FoodCard;