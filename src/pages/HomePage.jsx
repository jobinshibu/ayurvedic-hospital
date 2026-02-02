import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TreatmentSection from '../components/TreatmentSection';
import DoctorSection from '../components/DoctorSection';
import GallerySection from '../components/GallerySection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <TreatmentSection />
            <DoctorSection />
            <GallerySection />
            <ContactSection />
        </>
    );
}
