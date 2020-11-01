import logo from './logo.svg';
import './App.css';
import FormDemo from './FormDemo';
import ReservationFrom from './FormDemoMultiple';
import StateLift from './StateLiftDemo';

function App() {
  return (
    <div className="App">
      {<FormDemo/>}
      {<ReservationFrom/>}
      {<StateLift/>}
    </div>
  );
}

export default App;
