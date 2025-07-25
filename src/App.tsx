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
  ProblemSection,
  BuildWithUsSection,
  ContactSection
} from './sections';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <MissionSection />
      <ProblemSection />
      <BuildWithUsSection />
      <GallerySection />
        <ExperienceSection />
        <BuildingStepsSection />
        <StatsSection />
        <FeaturesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
