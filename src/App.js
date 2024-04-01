import logo from './logo.svg';
import './App.css';

let installPrompt = null;
// const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  // installButton.removeAttribute("hidden");
});

function App() {

  const onClick = async () => {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    console.log(`Install prompt was: ${result.outcome}`);
    disableInAppInstallPrompt();
  };

  function disableInAppInstallPrompt() {
    installPrompt = null;
    // installButton.setAttribute("hidden", "");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button
          onClick={onClick}
        >
          Learn React
        </button>
      </header>
    </div>
  );
}

export default App;
