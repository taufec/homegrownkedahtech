'use client'
import { useState } from 'react'

const categories = ['Education', 'AI / ML', 'E-commerce', 'Fintech', 'SaaS', 'Marketing', 'Healthcare', 'Agritech', 'Content', 'Infra', 'Media', 'Others']

const projects = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: 'PROJECT NAME',
  description: 'PROJECT DESCRIPTION',
  tags: ['+2'],
  comments: 5,
}))

export default function DirectorySection() {
  const [active, setActive] = useState('')
  const [search, setSearch] = useState('')

  return (
    <section id="submit" className="bg-white rounded-t-3xl py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-start justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-none">
            LOOK FOR TECH.<br />
            STAY FOR THE<br />
            PEOPLE.
          </h2>
          <div className="hidden md:flex items-center gap-1 bg-black text-[#00ff66] rounded-xl px-3 py-2">
            <span className="text-xs font-black">kedah<br/>tech</span>
          </div>
        </div>
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            placeholder="Search startups..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border-2 border-black rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#00ff66]"
          />
          <button className="bg-black text-white rounded-full px-5 py-3 text-xs font-bold flex items-center gap-1">
            SORT
          </button>
          <button className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(active === cat ? '' : cat)}
              className={`py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                active === cat ? 'bg-[#00ff66] text-black' : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {projects.map((p) => (
            <div key={p.id} className="border-2 border-black rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
              <div className="bg-gray-200 h-36 flex items-center justify-center">
                <span className="text-gray-400 text-xs">Project Image</span>
              </div>
              <div className="p-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold">PROJECT NAME</span>
                  <span className="text-xs text-gray-400">{p.tags[0]}</span>
                </div>
                <p className="text-xs text-gray-600 mt-1">PROJECT DESCRIPTION</p>
                <div className="flex items-center gap-1 mt-2">
                  <span className="text-xs text-gray-400">💬 {p.comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="bg-black text-white rounded-full px-10 py-3 text-sm font-bold hover:bg-gray-900 transition-colors">
            LOAD MORE
          </button>
        </div>
      </div>
    </section>
  )
}
