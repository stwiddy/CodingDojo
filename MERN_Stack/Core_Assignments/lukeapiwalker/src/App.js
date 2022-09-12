import './App.css';
import HeaderForm from './components/HeaderForm';
import DisplayChar from './views/DisplayChar';
import DisplayPlanet from './views/DisplayPlanet';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Luke APIWalker</h1>
      <HeaderForm />
      <Routes>
        <Route path="/people/:id" element={<DisplayChar />} />
        <Route path="/planets/:id" element={<DisplayPlanet />} />
      </Routes>
    </div>
  );
}

export default App;
