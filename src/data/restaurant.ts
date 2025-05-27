import { Restaurant } from '../types';

export const restaurantInfo: Restaurant = {
  id: '1',
  name: 'Food Shop',
  description: 'Experience a fusion of global flavors crafted with locally-sourced ingredients. Our chefs combine traditional techniques with modern innovation to create unforgettable dining experiences.',
  address: 'Dhaka, Bangladesh',
  phone: '(555) 123-4567',
  email: 'tahmeedtoqi123@gmail.com',
  openingHours: [
    { day: 'Monday - Friday', hours: '11:00 AM - 10:00 PM' },
    { day: 'Saturday - Sunday', hours: '10:00 AM - 11:00 PM' }
  ],
  image: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg?auto=compress&cs=tinysrgb&w=600'
};