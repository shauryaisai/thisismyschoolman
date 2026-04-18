import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: About,
})

function About() {
  return (
    <div className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-school-navy mb-8 text-center border-b-4 border-school-gold pb-4 inline-block mx-auto">About Us</h1>
        
        <div className="prose prose-lg max-w-none text-slate-700">
          <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-2xl font-bold text-school-navy mb-4 flex items-center gap-3">
              <span className="text-school-gold">🎯</span> Our Mission
            </h2>
            <p className="leading-relaxed">
              To provide a nurturing, innovative, and inclusive learning environment that empowers students to discover their full potential, cultivate a lifelong love for learning, and develop the ethical foundation necessary to become responsible global citizens.
            </p>
          </section>

          <section className="mb-12 bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <h2 className="text-2xl font-bold text-school-navy mb-4 flex items-center gap-3">
              <span className="text-school-gold">👁️</span> Our Vision
            </h2>
            <p className="leading-relaxed">
              To be a premier educational institution recognized for excellence in academics, character development, and holistic growth, shaping resilient leaders who will positively impact society.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-school-navy mb-4">Commitment to Academic Excellence</h2>
            <p className="mb-4 leading-relaxed">
              At Shashi Public Sr. Secondary School, academic rigor is balanced with creative exploration. We strictly adhere to the CBSE curriculum while employing innovative pedagogical practices. Our dedicated faculty members are committed to providing personalized attention, ensuring that every student's unique learning needs are met.
            </p>
            <p className="leading-relaxed">
              We believe that true excellence extends beyond textbooks. We encourage critical thinking, problem-solving, and practical application of knowledge through well-equipped laboratories, interactive smart classrooms, and diverse co-curricular programs.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-school-navy mb-4">Brief History & Values</h2>
            <p className="mb-4 leading-relaxed">
              Established with a clear vision to democratize quality education, Shashi Public School has grown from a humble beginning into a respected institution in Shahdara, Delhi. Over the decades, we have maintained a steadfast commitment to our core values:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 list-none pl-0">
              <li className="bg-school-navy text-white p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <strong>Integrity:</strong> Upholding honesty and strong moral principles in all actions.
              </li>
              <li className="bg-school-navy text-white p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <strong>Respect:</strong> Valuing the diversity and individuality of every school community member.
              </li>
              <li className="bg-school-navy text-white p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <strong>Excellence:</strong> Striving for the highest standards in academics and behavior.
              </li>
              <li className="bg-school-navy text-white p-4 rounded-xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <strong>Empathy:</strong> Fostering compassion and understanding towards others.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
