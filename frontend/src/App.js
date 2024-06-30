import logo from './101doc.png';
import './App.css';
import TextEditor from './components/TextEditor';
import SideBanner from './components/SideBanner';
import MarkdownEditor from './components/MarkDownEditor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>
      </header>
      <body className='container'>
        {/* <TextEditor></TextEditor> */}
        <div className='main'>
          <MarkdownEditor></MarkdownEditor>
        </div>
        <div className='sidebar'>
          <SideBanner></SideBanner>
        </div>
      </body>
    </div>
  );
}

export default App;
