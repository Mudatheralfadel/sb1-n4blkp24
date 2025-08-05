import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Bamboo Kitchen Utensil Set',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4198018/pexels-photo-4198018.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kitchen',
    description: 'Complete 6-piece bamboo kitchen utensil set. Sustainable, durable, and naturally antimicrobial.',
    sustainabilityFeatures: ['100% Organic Bamboo', 'Plastic-Free', 'Biodegradable'],
    inStock: true,
    rating: 4.8,
    reviews: 127
  },
  {
    id: '2',
    name: 'Organic Cotton Tote Bag',
    price: 19.99,
    image: 'https://images.pexels.com/photos/4750268/pexels-photo-4750268.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home',
    description: 'Sturdy organic cotton tote bag perfect for grocery shopping or daily use.',
    sustainabilityFeatures: ['Organic Cotton', 'Fair Trade', 'Reusable'],
    inStock: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Natural Soap Bar Set',
    price: 24.99,
    image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Personal Care',
    description: 'Set of 3 handcrafted natural soap bars with essential oils. Vegan and cruelty-free.',
    sustainabilityFeatures: ['Vegan', 'Cruelty-Free', 'Natural Ingredients'],
    inStock: true,
    rating: 4.9,
    reviews: 203
  },
  {
    id: '4',
    name: 'Stainless Steel Water Bottle',
    price: 34.99,
    image: 'https://images.pexels.com/photos/3735165/pexels-photo-3735165.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wellness',
    description: 'Double-walled stainless steel water bottle. Keeps drinks cold for 24h or hot for 12h.',
    sustainabilityFeatures: ['BPA-Free', 'Reusable', 'Durable'],
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '5',
    name: 'Organic Tea Collection',
    price: 39.99,
    image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Wellness',
    description: 'Premium collection of 12 organic herbal teas. Sourced directly from sustainable farms.',
    sustainabilityFeatures: ['Organic Certified', 'Fair Trade', 'Biodegradable Packaging'],
    inStock: true,
    rating: 4.8,
    reviews: 94
  },
  {
    id: '6',
    name: 'Wooden Phone Stand',
    price: 16.99,
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Home',
    description: 'Handcrafted wooden phone stand made from reclaimed wood. Perfect for desk or nightstand.',
    sustainabilityFeatures: ['Reclaimed Wood', 'Handcrafted', 'Plastic-Free'],
    inStock: true,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '7',
    name: 'Beeswax Food Wraps',
    price: 22.99,
    image: 'https://images.pexels.com/photos/4099264/pexels-photo-4099264.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Kitchen',
    description: 'Set of 4 organic beeswax food wraps. Sustainable alternative to plastic wrap.',
    sustainabilityFeatures: ['Organic Cotton', 'Natural Beeswax', 'Reusable'],
    inStock: true,
    rating: 4.6,
    reviews: 112
  },
  {
    id: '8',
    name: 'Organic Skincare Set',
    price: 49.99,
    image: 'https://images.pexels.com/photos/3738347/pexels-photo-3738347.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Personal Care',
    description: 'Complete organic skincare routine with cleanser, toner, and moisturizer.',
    sustainabilityFeatures: ['Organic Ingredients', 'Cruelty-Free', 'Recyclable Packaging'],
    inStock: false,
    rating: 4.9,
    reviews: 178
  }
];

export const featuredProducts = products.slice(0, 4);

export const categories = ['All', 'Kitchen', 'Home', 'Personal Care', 'Wellness'];