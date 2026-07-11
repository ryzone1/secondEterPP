import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import HelpSection from './components/HelpSection/HelpSection';
import Timeline from './components/Timeline/Timeline';
import NewsSection from './components/NewsSection/NewsSection';
import Footer from './components/Footer/Footer';
import Notification from './components/Notification/Notification';
import { newsData } from './data/news';
import './App.css';

function App() {
  return (
    <div className="app">
      <Notification />
      <Header />
      <Hero />
      <HelpSection />
      <Timeline />
      <NewsSection news={newsData} />
      <Footer />
    </div>
  );
}

export default App;
