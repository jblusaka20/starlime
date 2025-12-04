import { motion } from 'framer-motion';
import { Search, Calculator, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const serviceCategories = [
  {
    id: 'research',
    icon: Search,
    title: 'Research & Consulting Services',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'from-emerald-50 to-emerald-100',
    description: 'Comprehensive research and consulting solutions that drive evidence-based decision-making and organizational excellence.',
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
    bgColor: 'from-blue-50 to-blue-100',
    description: 'Professional audit and taxation services ensuring compliance, transparency, and financial excellence.',
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
    bgColor: 'from-teal-50 to-teal-100',
    description: 'Diverse business services supporting organizational growth, efficiency, and market presence.',
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

export default function ServicesPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Comprehensive solutions across research, audit, and general business services
              designed to drive sustainable growth and organizational excellence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="space-y-16 max-w-6xl mx-auto">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
              >
                <div className={`bg-gradient-to-br ${category.bgColor} p-8 md:p-12`}>
                  <div className="flex items-start gap-6 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <category.icon className="text-white" size={40} />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {category.title}
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-4">
                    {category.services.map((service, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <CheckCircle className={`text-${category.color.split('-')[1]}-500 flex-shrink-0 mt-0.5`} size={20} />
                        <span className="text-gray-700 leading-relaxed font-medium">{service}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="mt-8 flex justify-center"
                  >
                    <button
                      onClick={() => navigate('/contact')}
                      className={`group px-8 py-4 bg-gradient-to-r ${category.color} text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2`}
                    >
                      Get Started with {category.title}
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Let's discuss how our services can help transform your organization and achieve your goals.
              </p>
              <button
                onClick={() => navigate('/contact')}
                className="px-10 py-5 bg-white text-emerald-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Contact Us Today
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
