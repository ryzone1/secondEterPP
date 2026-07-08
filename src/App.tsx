import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HelpSection from './components/HelpSection/HelpSection';
import NewsSection from './components/NewsSection/NewsSection';
import Footer from './components/Footer/Footer';
import { newsData } from './data/news';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <HelpSection />
      <NewsSection news={newsData} />
      <Footer />
    </div>
  );
}

export default App;
