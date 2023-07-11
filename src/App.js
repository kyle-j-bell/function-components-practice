//Imports Typhlosion and Bulbasaur function components from Showcase.js, plus App.css and Showcase.css.
import { Typhlosion, Bulbasaur } from "./Showcase";
import "./App.css";
import "./Showcase.css";

//Displays Typhlosion and Bulbasaur function components in order.
function App() {
  return (
    <div className="background">
      <h1>
        <Typhlosion />
      </h1>
      <h1>
        <Bulbasaur />
      </h1>
    </div>
  );
}

export default App;
