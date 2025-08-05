import React from 'react';
import { Leaf, Users, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Eco Products' },
    { number: '5', label: 'Years Experience' },
    { number: '100%', label: 'Sustainable' },
  ];

  const values = [
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      title: 'Environmental Responsibility',
      description: 'We prioritize products that have minimal environmental impact and support regenerative practices.'
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: 'Community First',
      description: 'Supporting local artisans and fair trade practices to create positive social impact.'
    },
    {
      icon: <Globe className="h-8 w-8 text-emerald-600" />,
      title: 'Global Impact',
      description: 'Working towards a sustainable future through conscious consumption and responsible sourcing.'
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: 'Quality Assured',
      description: 'Every product is carefully vetted for quality, sustainability, and ethical production methods.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Gronful
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We're on a mission to make sustainable living accessible, affordable, and beautiful. 
            Every product we curate helps people live healthier while protecting our planet.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            "Helping people live healthier while protecting the planet through carefully curated, 
            sustainable products that don't compromise on quality or style."
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Gronful was born from a simple realization: the products we use every day 
                  should be good for us and good for the planet. Founded in 2020, we started 
                  as a small team passionate about finding alternatives to conventional products 
                  that often harm both our health and the environment.
                </p>
                <p>
                  What began as a personal journey to live more sustainably quickly became a 
                  mission to help others do the same. We believe that sustainable living shouldn't 
                  be complicated, expensive, or require sacrificing quality.
                </p>
                <p>
                  Today, we work with over 50 carefully vetted suppliers who share our values 
                  of environmental responsibility, fair trade, and exceptional quality. Every 
                  product in our collection is chosen with care, ensuring it meets our high 
                  standards for sustainability and effectiveness.
                </p>
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3912979/pexels-photo-3912979.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainable products"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from product selection to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="max-w-3xl mx-auto">
            <img
              src="https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team photo"
              className="rounded-xl shadow-lg mb-8"
            />
            <p className="text-lg text-gray-700">
              Our diverse team of sustainability experts, product curators, and customer experience 
              specialists work together to bring you the best eco-friendly products. We're united 
              by our passion for creating a more sustainable future, one product at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;