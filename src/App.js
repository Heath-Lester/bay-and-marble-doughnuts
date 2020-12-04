
import './App.css';
import { Home } from "./Home"
import { FAQ } from "./FAQ"


function App() {
  const user = { id: 1, name: "Bryan" }
  return (
    <div className="App">
      <Home user={user} />
      <FAQ />
    </div>
  );
}

export default App;
