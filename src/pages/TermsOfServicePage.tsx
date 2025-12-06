import { motion } from 'framer-motion';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-24 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-white/90">
              Effective Date: January 1, 2024
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-gray-700"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using the StarLime Consultant & General Dealer Limited website and services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Use License</h2>
                <p className="leading-relaxed mb-4">
                  Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>Modify or copy the materials</li>
                  <li>Use the materials for any commercial purpose</li>
                  <li>Transfer the materials to another person</li>
                  <li>Remove any copyright or proprietary notations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
                <p className="leading-relaxed">
                  The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, regarding the materials.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Limitations of Liability</h2>
                <p className="leading-relaxed">
                  In no event shall StarLime or its suppliers be liable for any damages arising out of the use or inability to use the materials on our website.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Service Terms</h2>
                <p className="leading-relaxed mb-4">
                  When engaging with StarLime's consulting and service delivery:
                </p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>All projects are subject to written agreement</li>
                  <li>Confidentiality of client information is strictly maintained</li>
                  <li>Payment terms are as specified in individual agreements</li>
                  <li>Services are provided in accordance with professional standards</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
                <p className="leading-relaxed">
                  These terms and conditions are governed by and construed in accordance with the laws of Zambia.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
                <p className="leading-relaxed">
                  For questions regarding these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg mt-4">
                  <p><strong>Email:</strong> starLimeconsulting@gmail.com</p>
                  <p><strong>Phone:</strong> +260 (978) 155-958</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
