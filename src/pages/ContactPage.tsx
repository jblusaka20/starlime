import { motion } from 'framer-motion';
import Contact from '../components/Contact';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Ready to transform your organization? We're here to help you achieve your goals
              with our comprehensive consulting and service solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Mail,
                title: 'Email Us',
                info: 'starLimeconsulting@gmail.com',
                color: 'from-emerald-500 to-emerald-600'
              },
              {
                icon: Phone,
                title: 'Call Us',
                info: '+260 (978) 155-958',
                color: 'from-teal-500 to-teal-600'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                info: 'Off Palm Drive Road, Chelstone, Lusaka, Zambia',
                color: 'from-cyan-500 to-cyan-600'
              },
              {
                icon: Clock,
                title: 'Business Hours',
                info: 'Monday - Friday: 8:00 AM - 5:00 PM',
                color: 'from-blue-500 to-blue-600'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.info}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
