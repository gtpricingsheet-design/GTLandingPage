import { Clock, Shield, CheckCircle, Users } from 'lucide-react';

export default function TrustBar() {
  const trustItems = [
    { icon: Clock, label: '70+ Years Legacy' },
    { icon: Shield, label: 'BRCGS AA Grade' },
    { icon: CheckCircle, label: 'SALSA Accredited' },
    { icon: Users, label: 'Employee-Owned Trust' },
  ];

  return (
    <section className="bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  <IconComponent className="w-6 h-6 text-green-600" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-900">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
