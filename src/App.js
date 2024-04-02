import logo from './logo.svg';
import './App.css';
import { useInstallPrompt } from './useInstallPrompt';


function App() {

  const [s, get] = useInstallPrompt()
  return (
    <div className="App">
      <header className="App-header">

        {s && <button
          onClick={get}
        >
          install app
        </button>}
      </header>
    </div>
  );
}

export default App;
