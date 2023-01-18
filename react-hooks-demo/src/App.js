import './App.css';
import ClassCounter from './components/ClassCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HooksCounter from './components/HooksCounter';

function App() {
  return (
    <div className="App">
      <ClassCounter/>
      <HooksCounter/>
      <HookCounterTwo/>
    </div>
  );
}

export default App;
