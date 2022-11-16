import './App.css';
import './components/components.css'
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Counter from './components/Counter';


function App() {

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;
