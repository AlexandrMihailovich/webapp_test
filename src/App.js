import logo from './logo.svg';
import './App.css';
import { useInstallPrompt } from './useInstallPrompt';

const props = {
  min: 0,
  step: 0.05,
  pattern: "[0-9]+([\.,][0-9]+)?"//"[0-9]{10}"
}

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
      <input type='text' inputMode='decimal' {...props} />
    </div>
  );
}

export default App;
