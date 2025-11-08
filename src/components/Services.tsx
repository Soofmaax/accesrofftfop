import type { FC } from 'react';
import { services } from '../data/mockData';
import { Square, Home, CheckCircle } from 'lucide-react';

const iconMap = {
  Square,
  Home,
  CheckCircle,
};

const Services: FC = () => {
  return (
    <section id="services" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Nos Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions d'accès toiture et aménagements conformes aux normes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const IconComponent = iconMap[s.icon as keyof typeof iconMap] ?? CheckCircle;

            return (
              <div
                key={s.id}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 text-blue-600 rounded-xl p-3 mr-3">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{s.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;