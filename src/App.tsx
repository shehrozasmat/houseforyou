import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import {
  HeroSection,
  MissionSection,
  StatsSection,
  FeaturesSection,
  BuildingStepsSection,
  TestimonialsSection,
  GallerySection,
  ExperienceSection,
  ContactSection
} from './sections';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MissionSection />
      <StatsSection />
      <FeaturesSection />
      <BuildingStepsSection />
      <TestimonialsSection />
      <GallerySection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
