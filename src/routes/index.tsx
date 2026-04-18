import { createFileRoute, Link } from '@tanstack/react-router'
import { CountUp } from '../components/CountUp'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-school-navy text-school-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-school-gold">Welcome to Shashi Public School</h1>
          <p className="text-xl md:text-2xl mb-10 opacity-90">Empowering Students to Achieve Excellence and Integrity</p>
          <Link to="/admissions" className="inline-block bg-school-gold text-school-navy px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-school-navy transition-all transform hover:scale-105 shadow-lg">
            Apply Now
          </Link>
        </div>
      </section>

      {/* Scrolling Announcement Banner */}
      <div className="bg-school-gold text-school-navy py-3 px-4 overflow-hidden shadow-inner flex">
        <div className="font-bold pr-4 border-r border-school-navy whitespace-nowrap z-10 bg-school-gold">
          📢 LATEST NEWS:
        </div>
        <div className="flex-grow overflow-hidden relative">
          <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap inline-block px-4 font-medium">
            Admissions open for Academic Year 2026-2027 • Half-yearly examinations starting next month • Parent-Teacher Meeting scheduled for Saturday • Annual Sports Day dates announced!
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}} />

      {/* About Us Summary */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-school-navy mb-6">Nurturing Future Leaders</h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              At Shashi Public Sr. Secondary School, we believe in providing a holistic educational experience that shapes the leaders of tomorrow. With a rich history of academic excellence and character development, we are dedicated to fostering a supportive and engaging learning environment.
            </p>
            <Link to="/about" className="inline-flex items-center text-school-navy font-bold hover:text-school-gold transition-colors">
              Learn More About Our History →
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-school-gold mb-2"><CountUp end={100} suffix="%" /></div>
              <div className="text-school-navy font-semibold">Pass Rate</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-school-gold mb-2"><CountUp end={30} suffix="+" /></div>
              <div className="text-school-navy font-semibold">Expert Teachers</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-school-gold mb-2"><CountUp end={15} suffix="+" /></div>
              <div className="text-school-navy font-semibold">Sports & Clubs</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl font-bold text-school-gold mb-2"><CountUp end={31} /></div>
              <div className="text-school-navy font-semibold">Years of Legacy</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Circulars */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-school-navy mb-4">Latest News & Circulars</h2>
            <p className="text-slate-600">Important updates and information for parents and students.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { date: 'Mar 15, 2026', title: 'CBSE Board Exam Guidelines', desc: 'Important instructions for students appearing in upcoming board exams.' },
              { date: 'Mar 10, 2026', title: 'Fee Submission Deadline', desc: 'Last date for the submission of 1st quarter fees without late penalty.' },
              { date: 'Mar 05, 2026', title: 'Summer Camp Registration', desc: 'Enrollment now open for our annual summer enrichment program.' }
            ].map((news, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-slate-50">
                <div className="bg-school-navy text-school-white px-6 py-2 text-sm font-semibold">
                  {news.date}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-school-navy mb-3">{news.title}</h3>
                  <p className="text-slate-600 mb-4">{news.desc}</p>
                  <a href="#" className="text-school-gold font-semibold hover:underline">Download PDF</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
