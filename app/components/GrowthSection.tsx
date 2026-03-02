const jobs = [
  'Position name - Company name - location',
  'Position name - Company name - location',
  'Position name - Company name - location',
  'Position name - Company name - location',
]
const hb = [
  'Hackathon name location | Bounty name location..',
  'Hackathon name location | Bounty name location..',
  'Hackathon name location | Bounty name location..',
  'Hackathon name location | Bounty name location..',
]
const events = [
  'Event & meetup name date',
  'Event & meetup name date',
  'Event & meetup name date',
  'Event & meetup name date',
]

export default function GrowthSection() {
  return (
    <section id="engage" className="bg-[#f0f0f0] py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight mb-12">
          GROWTH IS THE<br />
          PLAN. BUILDING<br />
          IS THE PROOF.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Job Opening */}
          <div className="bg-white rounded-2xl p-5">
            <h3 className="font-black text-lg uppercase mb-4">JOB OPENING</h3>
            <div className="flex flex-col gap-3">
              {jobs.map((j, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="mt-0.5">&#128188;</span>
                  <span>{j}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 text-xs font-black text-[#00ff66] bg-black px-4 py-2 rounded-full hover:brightness-110 transition">
              VIEW ALL
            </button>
          </div>
          {/* H&B */}
          <div className="bg-white rounded-2xl p-5">
            <h3 className="font-black text-lg uppercase mb-4">H&amp;B</h3>
            <div className="flex flex-col gap-3">
              {hb.map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="mt-0.5">&#128300;</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 text-xs font-black text-[#00ff66] bg-black px-4 py-2 rounded-full hover:brightness-110 transition">
              VIEW ALL
            </button>
          </div>
          {/* Events & Meetups */}
          <div className="bg-white rounded-2xl p-5">
            <h3 className="font-black text-lg uppercase mb-4">EVENTS &amp; MEETUPS</h3>
            <div className="flex flex-col gap-3">
              {events.map((e, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                  <span className="mt-0.5">&#128101;</span>
                  <span>{e}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 text-xs font-black text-[#00ff66] bg-black px-4 py-2 rounded-full hover:brightness-110 transition">
              VIEW ALL
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
