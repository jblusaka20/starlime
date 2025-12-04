import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, Calculator, Briefcase, ChevronDown, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const serviceCategories = [
  {
    id: 'research',
    icon: Search,
    title: 'Research & Consulting Services',
    color: 'from-emerald-500 to-emerald-600',
    bgGradient: 'from-emerald-50 to-emerald-100',
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
    bgGradient: 'from-blue-50 to-blue-100',
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
    bgGradient: 'from-teal-50 to-teal-100',
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
  const navigate = useNavigate();

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6 text-sm font-medium"
          >
            What We Offer
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-emerald-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions across research, audit, and general business services
            designed to drive sustainable growth and organizational excellence.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setExpandedCategory(expandedCategory === category.id ? null : category.id)}
                className={`w-full p-8 flex items-center justify-between transition-all duration-300 ${
                  expandedCategory === category.id ? `bg-gradient-to-r ${category.bgGradient}` : 'hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className={`w-18 h-18 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}
                  >
                    <category.icon className="text-white" size={36} />
                  </motion.div>
                  <div className="text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{category.title}</h3>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 font-medium">{category.services.length} specialized services</span>
                      <span className={`px-3 py-1 bg-gradient-to-r ${category.color} text-white text-xs font-bold rounded-full`}>
                        Professional
                      </span>
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-400" size={28} />
                </motion.div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedCategory === category.id ? 'auto' : 0,
                  opacity: expandedCategory === category.id ? 1 : 0
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-8 bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    {category.services.map((service, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.03 }}
                        whileHover={{ scale: 1.02, x: 4 }}
                        className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
                      >
                        <CheckCircle2 className={`text-emerald-500 flex-shrink-0 mt-0.5`} size={20} />
                        <span className="text-gray-700 leading-relaxed font-medium">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="flex justify-center pt-4"
                  >
                    <button
                      onClick={() => navigate('/services')}
                      className={`group px-8 py-3 bg-gradient-to-r ${category.color} text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2`}
                    >
                      View All Services
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <button
            onClick={() => navigate('/contact')}
            className="group px-10 py-5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
          >
            Get Started Today
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
