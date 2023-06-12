import './styles/App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
