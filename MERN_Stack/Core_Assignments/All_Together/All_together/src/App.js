import logo from './logo.svg';
import './App.css';

import pecard from './components/pcard';

function App() {
  return (
    <div className="App">
    <pecard firstName={"Doe"} lastName={"Jane"} age={ 45 } hairColor={"Black"}/>
    <pecard firstName={"Smith"} lastName={"John"} age={ 88 } hairColor={"Brown"}/>
    <pecard firstName={"Fillmore"} lastName={"Millard"} age={ 50 } hairColor={"Brown"}/>
    <pecard firstName={"Smith"} lastName={"Maria"} age={ 62 } hairColor={"Brown"}/>
</div>
  );
}

export default App;
