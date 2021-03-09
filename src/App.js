import {  ShortcutProvider } from 'react-keybind'
import './App.css';
import Info from './containers/info'

function App() {
  return (
    <ShortcutProvider
      preventDefault="true"
    >
      <Info />
    </ShortcutProvider>
  );
}

export default App;
