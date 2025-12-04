import { motion } from 'framer-motion';
import HumanResource from '../components/HumanResource';
import { Globe, GraduationCap, Users, Award, BookOpen, Lightbulb } from 'lucide-react';

export default function TeamPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A global network of accomplished professionals bringing world-class expertise
              and innovation to every project.
            </p>
          </motion.div>
        </div>
      </section>

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
              Meet Our <span className="text-emerald-600">Experts</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team comprises distinguished professionals with qualifications ranging from
              Bachelor's degrees to Postdoctoral levels, each bringing extensive field experience
              and academic excellence.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-6"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: GraduationCap,
                title: 'PhD & Postdoctoral Researchers',
                description: '30% of our team holds doctoral and postdoctoral qualifications with distinguished research backgrounds.',
                color: 'from-emerald-500 to-emerald-600',
                gradient: 'from-emerald-50 to-emerald-100'
              },
              {
                icon: BookOpen,
                title: 'Masters-Level Consultants',
                description: '40% of our experts bring advanced specialized knowledge with Masters degrees across various disciplines.',
                color: 'from-teal-500 to-teal-600',
                gradient: 'from-teal-50 to-teal-100'
              },
              {
                icon: Users,
                title: 'Bachelors-Level Professionals',
                description: '30% of our team provides strong foundational expertise and practical field experience.',
                color: 'from-cyan-500 to-cyan-600',
                gradient: 'from-cyan-50 to-cyan-100'
              },
              {
                icon: Globe,
                title: 'Global Perspective',
                description: 'Our team draws talent from across the globe, ensuring diverse perspectives and international best practices.',
                color: 'from-blue-500 to-blue-600',
                gradient: 'from-blue-50 to-blue-100'
              },
              {
                icon: Award,
                title: 'Proven Excellence',
                description: 'Distinguished service delivery track records with senior researchers and accomplished professors.',
                color: 'from-emerald-500 to-teal-600',
                gradient: 'from-emerald-50 to-teal-100'
              },
              {
                icon: Lightbulb,
                title: 'Multi-Sectoral Expertise',
                description: 'Advanced knowledge spanning research, education, governance, climate change, technology, and more.',
                color: 'from-teal-500 to-cyan-600',
                gradient: 'from-teal-50 to-cyan-100'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-lg`}>
                  <item.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <HumanResource />

      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl p-12 text-white shadow-2xl"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Join Our Team</h2>
              <p className="text-xl text-white/90 mb-8 text-center leading-relaxed">
                We're always looking for talented professionals to join our global network
                of experts. If you're passionate about driving positive change and excellence,
                we'd love to hear from you.
              </p>
              <div className="flex justify-center">
                <a
                  href="mailto:starLimeconsulting@gmail.com"
                  className="px-10 py-5 bg-white text-emerald-600 rounded-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
