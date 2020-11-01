import logo from './logo.svg';
import './App.css';
import upper, { text1, text2, text3 } from './file1';
import './file2';
import person from './file2';
import {males} from './file2';
import {females} from './file2';
import MultiWelcome from './file3';

const kurt = person;
const arr = { ...kurt };
const { firstName, email } = kurt;

const navne = [...males, arr.firstName, 'Helle', ...females, 'Tina'];
console.log(navne)

function App() {
  return (
    <div className="App">
      <h2>Ex 1</h2>
      <p>{text1}</p>
      <p>{upper(text1)}</p>
      <p>{upper(text2)}</p>
      <p>{upper(text3)}</p>
      <p>{arr.firstName} {arr.email}</p>

      <h2>Ex 2</h2>
      <p>{firstName} {email}</p>

      <h2>Ex 3</h2>
      <MultiWelcome/>
    </div>
  );
}

export default App;
