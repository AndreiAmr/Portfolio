import './app.css';
import PackagesProvider from './infra/packages';
import Header from '@/ui/components/Header';
import Home from '@/ui/screens/Home';

function App() {
  return (
    <PackagesProvider>
      <Header />
      <Home />
    </PackagesProvider>
  );
}

export default App;
