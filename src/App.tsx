import './app.css';
import PackagesProvider from './infra/packages';
import Header from '@/ui/components/Header';
import Home from '@/ui/screens/Home';
import About from '@/ui/screens/About';
import Controllers from '@/ui/components/Controllers';
import { ControllerContextProvider } from '@/infra/contexts/Controllers.context';
import Skills from '@/ui/screens/Skills';
import Jobs from '@/ui/screens/Jobs';
import Contact from './ui/screens/Contact';
import Footer from './ui/screens/Footer';

function App() {
  return (
    <ControllerContextProvider>
      <PackagesProvider>
        <Header />
        <Home />
        <About />
        <Skills />
        <Jobs />
        <Contact />
        <Footer />
        <Controllers />
      </PackagesProvider>
    </ControllerContextProvider>
  );
}

export default App;
