import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import HowToGetStarted from './components/HowToGetStarted';
import Lottery from './components/Lottery';
import ProductCard from './components/ProductCard';


function App() {
  return (
    <div>
     <Header/>
     <Hero/>
     <HowToGetStarted/>
     <Lottery/>
     <ProductCard/>
    </div>
  );
}

export default App;
