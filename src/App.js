import './App.css';
import DictionaryApp from './DictionaryApp';
import Footer from './Footer';
import Background from "./words-background.jpg"

function App() {
  return (
    <div className="App">
      <div className="background" style={{backgroundImage: `url(${Background})`}}>
      <header className="App-header">
        <DictionaryApp />
        <Footer />

      </header>
      </div>
    </div>
  );
}

export default App;
