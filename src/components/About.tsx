import { motion } from 'framer-motion';
import { Target, Telescope, Shield } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-emerald-600">StarLime</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            StarLime Consultant & General Dealer Limited is a <strong>multidisciplinary consultancy and service delivery company</strong> established in 2024. We provide research-driven, practical, and innovative solutions that support organizational growth, community development, and effective service delivery across sectors.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            We operate with a commitment to professionalism, inclusiveness, and excellence, delivering high-quality consulting, auditing, taxation, and general business services tailored to meet diverse client needs.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our team consists of experienced professionals with expertise in research, programme design, monitoring and evaluation, education, governance, climate change, technology, taxation, and organizational systems strengthening.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <Telescope className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a leading multidisciplinary consultancy and service provider known for delivering evidence-based, innovative, and transformational solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-teal-50 to-emerald-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-teal-600 rounded-xl flex items-center justify-center mb-6">
              <Target className="text-white" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To deliver high-quality consulting, auditing, taxation, and general business services that support institutional efficiency, community development, and sustainable growth while upholding integrity, professionalism, and client-centered values.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-teal-600 p-8 rounded-2xl text-white shadow-xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
              <p className="text-white/90 leading-relaxed">
                StarLime Consultant & General Dealer Limited strives to empower institutions, communities, and individuals by providing reliable services that drive long-term development and operational effectiveness.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
