import React from 'react';
import { whyChooseUs } from '../data/mockData';
import { Shield, Lock, Clock, Users } from 'lucide-react';

const iconMap = {
  Shield,
  Lock,
  Clock,
  Users,
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Pourquoi Nous Choisir</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des engagements clairs et une expertise éprouvée pour vos accès toiture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] ?? Shield;

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 text-orange-600 rounded-xl p-3 mr-3">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;