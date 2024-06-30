import logo from './101doc.png';
import './App.css';
import SideBanner from './components/SideBanner';
import MarkdownEditor from './components/MarkDownEditor';
import { MarkdownProvider } from './components/Context';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
      </header>
      <MarkdownProvider>
        <div className='sidebar'>
          <SideBanner/>
        </div>
        <MarkdownEditor/>
      </MarkdownProvider>
    </div>
  );
}

export default App;
