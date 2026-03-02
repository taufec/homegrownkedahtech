export default function HeroSection() {
  const cards = [
    { title: 'Resource Title Here', rotate: '-rotate-12', x: '-translate-x-32', z: 'z-10' },
    { title: 'Resource Title Here', rotate: '-rotate-6', x: '-translate-x-16', z: 'z-20' },
    { title: 'Resource Title Here', rotate: 'rotate-0', x: 'translate-x-0', z: 'z-30' },
    { title: 'Resource Title Here', rotate: 'rotate-6', x: 'translate-x-16', z: 'z-20' },
    { title: 'Resource Title Here', rotate: 'rotate-12', x: 'translate-x-32', z: 'z-10' },
  ]

  return (
    <section id="discover" className="pt-16 pb-8 px-4 text-center bg-[#f0f0f0]">
      <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-black leading-none mb-6">
        HOMEGROWN KEDAH<br />TECH DIRECTORY
      </h1>
      <p className="text-2xl md:text-3xl text-gray-600 font-light mb-2">
        While they look south,
      </p>
      <p className="text-2xl md:text-3xl text-gray-600 font-light mb-4">
        we build up north.
      </p>
      <p className="text-sm text-gray-500 mb-8">Join 1.8K+ others</p>
      <a
        href="#submit"
        className="inline-block bg-[#00ff66] text-black font-black uppercase px-10 py-4 text-lg rounded-sm hover:brightness-110 transition-all mt-4 mb-16"
      >
        SUBMIT YOUR STARTUP
      </a>
      <div className="relative flex justify-center items-end h-64 mt-4 overflow-hidden">
        {cards.map((card, i) => (
          <div
            key={i}
            className={`absolute bg-black rounded-xl w-48 h-52 flex items-end p-3 shadow-2xl ${card.rotate} ${card.z}`}
            style={{ transform: `rotate(${(i - 2) * 8}deg) translateX(${(i - 2) * 60}px) translateY(${Math.abs(i - 2) * 20}px)` }}
          >
            <span className="text-white text-xs">{card.title}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
