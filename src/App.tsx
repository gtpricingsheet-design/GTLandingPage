import Header from './components/Header';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import CoreDivisions from './components/CoreDivisions';
import Advantage from './components/Advantage';
import HowItWorks from './components/HowItWorks';
import Testimonial from './components/Testimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <TrustBar />
      <CoreDivisions />
      <Advantage />
      <HowItWorks />
      <Testimonial />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
