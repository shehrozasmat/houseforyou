
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './sections/HeroSection';
import { MissionSection } from './sections/MissionSection';
import { StatsSection } from './sections/StatsSection';
import { FeaturesSection } from './sections/FeaturesSection';
import { BuildingStepsSection } from './sections/BuildingStepsSection';
import { AboutSection } from './sections/AboutSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { GallerySection } from './sections/GallerySection';
import { BlogSection } from './sections/BlogSection';
import { ContactSection } from './sections/ContactSection';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <FeaturesSection />
      <BuildingStepsSection />
      <AboutSection />
      <TestimonialsSection />
      <GallerySection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
