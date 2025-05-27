import React from 'react';
import { Star } from 'lucide-react';
import { Card } from '../ui/Card';

interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  comment: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    comment: 'The food is absolutely delicious! I ordered the Classic Cheeseburger and it was cooked to perfection. Delivery was quick and the food arrived still hot. Will definitely order again!'
  },
  {
    id: '2',
    name: 'Michael Chen',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 4,
    comment: 'Great variety of options on the menu. The pizza was fantastic with a perfect crust. The only thing that could be improved is the packaging for delivery.'
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    rating: 5,
    comment: 'The desserts here are amazing! I tried the Chocolate Lava Cake and it was divine. The customer service is also excellent. They were very accommodating with my special requests.'
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium text-secondary-900">{testimonial.name}</h4>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-yellow-400' 
                            : 'text-secondary-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-secondary-700 italic">"{testimonial.comment}"</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;