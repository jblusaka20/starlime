import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Calculator, Briefcase, ChevronDown } from 'lucide-react';

const serviceCategories = [
  {
    id: 'research',
    icon: Search,
    title: 'Research & Consulting Services',
    color: 'from-emerald-500 to-emerald-600',
    services: [
      'Programme Monitoring and Evaluation',
      'Foundation Learning and Child Development',
      'Adult Education and Community Development',
      'Public Implementation Science in Programme Programming',
      'Quality Assurance in Higher Education',
      'Research Development and Management',
      'Program Development and Implementation',
      'Child Care and Protection',
      'Gender and Inclusion',
      'Contextualized Climate Change Management Initiatives',
      'Policy Development, Implementation, and Evaluation',
      'Environmental Management and Agriculture'
    ]
  },
  {
    id: 'audit',
    icon: Calculator,
    title: 'Audit & Taxation Services',
    color: 'from-blue-500 to-blue-600',
    services: [
      'Independent Auditing of Institutions',
      'Capacity Development in Auditing and Accounting',
      'Development of SMART Audit Reports',
      'Tax Advisory and Compliance',
      'Financial Risk Assessment and Mitigation',
      'Internal Controls and System Audits',
      'Fraud Detection and Forensic Audit Support',
      'Capacity Building for Finance Teams'
    ]
  },
  {
    id: 'general',
    icon: Briefcase,
    title: 'General Service Delivery',
    color: 'from-teal-500 to-teal-600',
    services: [
      'Marketing Services',
      'Web Development',
      'Business Process Improvement',
      'Administrative Support Services',
      'Training and Capacity Building',
      'Community Engagement and Awareness Campaigns',
      'Event Planning and Coordination',
      'Enterprise Development Consultancy'
    ]
  }
];

export default function Services() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('research');

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions across research, audit, and general business services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className="w-full p-8 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center gap-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center`}>
                    <category.icon className="text-white" size={32} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{category.title}</h3>
                    <p className="text-gray-600">{category.services.length} specialized services</p>
                  </div>
                </div>
                <ChevronDown
                  className={`text-gray-400 transition-transform duration-300 ${
                    expandedCategory === category.id ? 'rotate-180' : ''
                  }`}
                  size={24}
                />
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedCategory === category.id ? 'auto' : 0,
                  opacity: expandedCategory === category.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-8 pt-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.services.map((service, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-br ${category.color} rounded-full mt-2 flex-shrink-0`}></div>
                        <span className="text-gray-700 leading-relaxed">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
