import React, { useState } from 'react';
import { restaurantInfo } from '../data/restaurant';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }, 1000);
    }
  };

  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-secondary-900 mb-4">Contact Us</h1>
          <p className="text-lg text-secondary-600">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-lg shadow-card p-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Send Us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 rounded-full p-3">
                    <Send className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="text-xl font-medium text-secondary-900 mb-2">Message Sent!</h3>
                <p className="text-secondary-600">
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />
                <Input
                  label="Email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                />
                <div className="space-y-2">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-secondary-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="flex w-full rounded-md border border-secondary-300 bg-white px-3 py-2 text-sm placeholder:text-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>
                <Button 
                  type="submit" 
                  variant="primary" 
                  fullWidth
                  className="mt-2"
                  icon={<Send className="h-4 w-4" />}
                >
                  Send Message
                </Button>
              </form>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-card p-8">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">Our Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-medium text-secondary-900 mb-1">Address</h3>
                  <p className="text-secondary-700">{restaurantInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-medium text-secondary-900 mb-1">Phone</h3>
                  <p className="text-secondary-700">{restaurantInfo.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-medium text-secondary-900 mb-1">Email</h3>
                  <p className="text-secondary-700">{restaurantInfo.email}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-100 rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-primary-600" />
                </div>
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
            
            <div className="mt-8 rounded-lg overflow-hidden h-48">
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

export default ContactPage;