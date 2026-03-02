const partners = [
  { name: 'Kedah Tech Valley', logo: 'KTV' },
  { name: 'AWS', logo: 'AWS' },
  { name: 'Solana Foundation', logo: 'SOL' },
  { name: 'Anthropic', logo: 'ANT' },
  { name: 'Hasan.VC', logo: 'HVC' },
  { name: 'The Network School', logo: 'TNS' },
]

export default function PartnersSection() {
  return (
    <section className="bg-[#f0f0f0] py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-12">
          THE TARGETED PARTNERS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all">
              <div className="text-center">
                <div className="w-24 h-12 bg-black text-white flex items-center justify-center rounded-lg font-black text-sm mx-auto mb-2">
                  {p.logo}
                </div>
                <p className="text-xs font-medium text-gray-600">{p.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-16 pt-8 border-t border-gray-300">
        <p className="text-xs text-gray-500">
          &copy; {new Date().getFullYear()} Homegrown Kedah Tech Directory
        </p>
      </div>
    </section>
  )
}
