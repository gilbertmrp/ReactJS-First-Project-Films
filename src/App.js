import './App.css';
import NavigationBar from './components/NavigationBar';
import Intro from './components/Intro';
import Trending from './components/Trending';
import SuperHero from './components/SuperHero';
import Footer from './components/Footer';
import "./style/landingpage.css";


function App() {
  return (
    <div className='body'>
      {/* Intro Section */}
      <div className='myBG'>
        <NavigationBar />
        <Intro />
      </div>
      {/* End of intro */}

      {/* Trending Section */}
      <div className='trending'>
        <Trending />
      </div>
      {/* End of trending */}

      {/* SuperHero Section */}
      <div className='superHero'>
        <SuperHero />
      </div>
      {/* End of superhero */}

      {/* Footer */}
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
