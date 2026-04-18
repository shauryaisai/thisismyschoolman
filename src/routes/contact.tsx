import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/contact')({
  component: Contact,
})

function Contact() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-school-navy mb-4 border-b-4 border-school-gold pb-4 inline-block mx-auto">Contact Us</h1>
          <p className="text-lg text-slate-600">We'd love to hear from you. Reach out to us for any queries.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <h2 className="text-2xl font-bold text-school-navy mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-navy focus:border-transparent" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-navy focus:border-transparent" placeholder="+91 98765 43210" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-navy focus:border-transparent" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                <select id="subject" className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-navy focus:border-transparent bg-white">
                  <option>General Inquiry</option>
                  <option>Admissions</option>
                  <option>Careers</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-school-navy focus:border-transparent resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-school-navy text-school-white py-4 rounded-xl font-bold text-lg hover:bg-school-gold hover:text-school-navy transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-school-navy text-school-white p-8 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold text-school-gold mb-6">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-school-white/10 rounded-full flex items-center justify-center text-xl shrink-0">📍</div>
                  <div>
                    <div className="font-bold text-lg mb-1">Address</div>
                    <div className="text-sm opacity-90 leading-relaxed">A-35, DDA Flats Road Near M. S. Park, Mandoli Road, Shahdara, Delhi – 110032</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-school-white/10 rounded-full flex items-center justify-center text-xl shrink-0">📞</div>
                  <div>
                    <div className="font-bold text-lg mb-1">Phone</div>
                    <div className="text-sm opacity-90">011-2258 1138<br />+91 98100 77384</div>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 bg-school-white/10 rounded-full flex items-center justify-center text-xl shrink-0">✉️</div>
                  <div>
                    <div className="font-bold text-lg mb-1">Email</div>
                    <div className="text-sm opacity-90">info@shashipublicschool.co.in</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="h-[350px] rounded-3xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d875.040850492707!2d77.29746996961272!3d28.684758274993612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb9b32dd4cff%3A0x47648d36f2505eec!2sshashi%20public%20school%2C%20New%20Modern%20Shahdara%2C%20Shahdara%2C%20Delhi%2C%20110032!5e0!3m2!1sen!2sin!4v1776523901573!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
