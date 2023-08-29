import './App.scss';
import Company from './components/Company/Company';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import News from './components/News/News';
import Partners from './components/Partners/Partners';
import Production from './components/Production/Production';
import Services from './components/Services/Services';

function App() {
  return (
      <>
      <Header/>
      <Hero/>
      <Production/>
      <Services/>
      <Company/>
      <News/>
      <Partners/>
      <Footer/>
      </>
  );
}

export default App;
