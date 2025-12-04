import { motion } from 'framer-motion';
import { Target, Telescope, Shield, Award, Users, TrendingUp } from 'lucide-react';
import About from '../components/About';
import CoreValues from '../components/CoreValues';

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About StarLime</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A multidisciplinary consultancy committed to delivering transformational solutions
              that empower institutions, communities, and individuals worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      <About />
      <CoreValues />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose <span className="text-emerald-600">StarLime?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Award,
                title: 'PhD-Level Expertise',
                description: 'Access to global network of accomplished professionals with doctoral and postdoctoral qualifications.',
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                icon: Users,
                title: 'Multidisciplinary Team',
                description: 'Experts across research, education, governance, climate change, technology, and organizational systems.',
                color: 'from-teal-500 to-teal-600'
              },
              {
                icon: TrendingUp,
                title: 'Proven Track Record',
                description: 'Distinguished service delivery experience with evidence-based, innovative solutions.',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: Shield,
                title: 'Ethical Standards',
                description: 'Commitment to integrity, professionalism, and ethical practices in all operations.',
                color: 'from-blue-500 to-blue-600'
              },
              {
                icon: Target,
                title: 'Client-Centered Approach',
                description: 'Customized services designed to meet unique client needs and objectives.',
                color: 'from-emerald-500 to-teal-600'
              },
              {
                icon: Telescope,
                title: 'Innovation-Driven',
                description: 'Creative, research-driven solutions that support sustainable growth and development.',
                color: 'from-teal-500 to-cyan-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white border-2 border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
