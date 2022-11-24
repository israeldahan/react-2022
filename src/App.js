import './App.css';
import './components/components.css'
import Footer from './components/Footer';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Counter from './components/Counter';
import TodayTime from './components/TodayTime';
import InputViewer from './components/InputViewer';


function App() {

  return (
    <div className="App">
      {/* <Header />
      
      <Footer />
      <Counter />
      <TodayTime/> */}
      <InputViewer />
    </div>
  );
}

export default App;
