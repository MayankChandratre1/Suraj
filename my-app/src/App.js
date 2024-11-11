import './App.css';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Join from './component/Join';
import Plans from './component/Plans';
import Programs from './component/Programs';
import Reasons from './component/Reasons';
import Testimonials from './component/Testimonials';


function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
