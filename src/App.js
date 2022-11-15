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
    words
  } = useContext(BaseContext);

  const buttonOnPressed = () => {
    let wordsArray = content.split(' ');

    if(wordsArray.length > 0)
    {
      setWords(wordsArray);
      setIsActive(true);
      console.log(words);
      setCurrentWord(wordsArray[currentWordIndex]);
    }
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setCurrentWordIndex(currentWordIndex => currentWordIndex + 1);
        setCurrentWord(words[currentWordIndex]);
        console.log("xx", words[currentWordIndex], currentWordIndex);
      }, 1000);
    } else if (!isActive && currentWordIndex !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, setCurrentWordIndex]);


  if(isActive == false)
  {
    return (
      <div className="App">
          <textarea className="content" name="content" onChange={(e) => setContent(e.target.value)} value={content ?? ""}>{content ?? ""}</textarea>
          <input className='button' value={"Start"} type="button" onClick={buttonOnPressed} />
      </div>
    );
  }
  else {
    return (
      <>
      {currentWord}
      </>
    );
  }

}

export default App;
