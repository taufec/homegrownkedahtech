import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import DirectorySection from './components/DirectorySection'
import GrowthSection from './components/GrowthSection'
import LearningSection from './components/LearningSection'
import PartnersSection from './components/PartnersSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      <Navbar />
      <HeroSection />
      <DirectorySection />
      <GrowthSection />
      <LearningSection />
      <PartnersSection />
    </main>
  )
}
