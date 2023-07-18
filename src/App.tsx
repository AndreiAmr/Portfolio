import './app.css';
import PackagesProvider from './infra/packages';
import Header from '@/ui/components/Header';
import Home from '@/ui/screens/Home';
import About from '@/ui/screens/About';
import Controllers from './ui/components/Controllers';
import { ControllerContextProvider } from './infra/contexts/Controllers.context';
import Skills from './ui/screens/Skills';

function App() {
  return (
    <ControllerContextProvider>
      <PackagesProvider>
        <Header />
        <Home />
        <About />
        <Skills />
        <Controllers />
      </PackagesProvider>
    </ControllerContextProvider>
  );
}

export default App;
