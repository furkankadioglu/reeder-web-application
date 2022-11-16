import logo from './logo.svg';
import './App.css';
import { BaseContext, BaseContextProvider } from './BaseContextProvider';
import { useContext, useEffect, useState } from 'react';

function App() {

  const [isActive, setIsActive] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState("");

  const { 
    setContent,
    content,
    setWords,
    words,
    speed,
    setSpeed
  } = useContext(BaseContext);

  const buttonOnPressed = () => {
    let wordsArray = content.split(' ');

    if(wordsArray.length > 0)
    {
      setWords(wordsArray);
      setIsActive(true);
      setCurrentWordIndex(0);
      setCurrentWord(wordsArray[currentWordIndex]);
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCurrentWordIndex(currentWordIndex + 1);

        if(typeof words[currentWordIndex] !== "undefined")
        {
          setCurrentWord(words[currentWordIndex]);
        }
        else {
          setIsActive(false);
          clearInterval(0);
        }
        
      }, speed);
    } else if (!isActive && currentWordIndex !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, currentWordIndex]);


  if(isActive == false)
  {
    return (
      <div className="App h-screen">
          <textarea className="bg-emerald-300 p-5" name="content" onChange={(e) => setContent(e.target.value)} value={content ?? ""}>{content ?? ""}</textarea>
          <br />
          <br/>
          <input name='speed' className='bg-emerald-300 p-5' value={speed} onChange={(e) => setSpeed(e.target.value)} />
          <br />
          <br />
          <input className='p-3 bg-indigo-500 text-white text-sm font-semibold rounded-md shadow focus:outline-none' value={"Start"} type="button" onClick={buttonOnPressed} />
      </div>
    );
  }
  else {
    return (
      <div className='bg-slate-900 grid place-items-center h-screen text-pink-500 text-3xl	'>
      {currentWord}
      </div>
    );
  }

}

export default App;
