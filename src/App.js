import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <Experience/>
    <Footer/>    
    </div>
  );
}

export default App;
