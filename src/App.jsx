import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TreatmentSection from './components/TreatmentSection';
import DoctorSection from './components/DoctorSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection/>
      <TreatmentSection/>
      <DoctorSection/>
      <GallerySection/>
      <ContactSection />
    </div>
  );
}

export default App;