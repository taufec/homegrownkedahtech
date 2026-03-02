const courses = [
  { id: 1, school: 'Salford & Co.', title: 'Master AI for Coding Optimization', bg: 'bg-blue-900' },
  { id: 2, school: 'RS Rimberia', title: 'Data Analysis Course', bg: 'bg-teal-700' },
  { id: 3, school: 'Kedah Tech', title: 'Web Development Bootcamp', bg: 'bg-purple-900' },
  { id: 4, school: 'Kedah Tech', title: 'Digital Marketing Masterclass', bg: 'bg-orange-800' },
]

export default function LearningSection() {
  return (
    <section id="grow" className="bg-black py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start justify-between mb-10">
          <h2 className="text-4xl md:text-5xl font-black uppercase text-[#00ff66] leading-tight">
            THEY&apos;RE<br />
            OUT-LEARNING<br />
            YOU RIGHT NOW.
          </h2>
          <div className="hidden md:flex items-center gap-2 border border-[#00ff66] rounded-xl px-3 py-2">
            <div className="w-4 h-4 bg-[#00ff66] rounded-sm" />
            <span className="text-[#00ff66] text-xs font-black leading-tight">kedah<br/>tech</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {courses.map((c) => (
            <div key={c.id} className={`${c.bg} rounded-2xl p-6 flex flex-col justify-between min-h-40 cursor-pointer hover:opacity-90 transition`}>
              <p className="text-white text-xs opacity-70">{c.school}</p>
              <h3 className="text-white font-black text-xl leading-tight mt-4">{c.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
