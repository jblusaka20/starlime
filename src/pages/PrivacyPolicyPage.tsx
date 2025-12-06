import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  StarLime Consultant & General Dealer Limited ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
                <p className="leading-relaxed mb-4">We may collect information about you in a variety of ways:</p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, mailing address, and organization details provided through contact forms or service inquiries.</li>
                  <li><strong>Automatic Data:</strong> Browser type, IP address, pages visited, and access time through cookies and similar tracking technologies.</li>
                  <li><strong>Service Usage Data:</strong> Information about how you interact with our services and websites.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">3. Use of Your Information</h2>
                <p className="leading-relaxed mb-4">We use the collected information for:</p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>Responding to inquiries and providing our consulting and service delivery</li>
                  <li>Sending periodic updates, newsletters, and promotional communications</li>
                  <li>Analyzing website usage to improve our services and user experience</li>
                  <li>Complying with legal obligations and protecting our rights</li>
                  <li>Conducting research and developing new services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">4. Information Disclosure</h2>
                <p className="leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. However, we may disclose information when required by law or with your explicit consent.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">5. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, or destruction.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
                <p className="leading-relaxed mb-4">You have the right to:</p>
                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>Access your personal data</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
                <p className="leading-relaxed">
                  For questions about this Privacy Policy, please contact us at:
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
