import logo from './logo.svg';
import './App.css';
import { BaseProvider } from './BaseProvider';
import { useContext } from 'react';

function App() {

  const { 
    setContent,
    content,
  } = useContext(BaseProvider);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
