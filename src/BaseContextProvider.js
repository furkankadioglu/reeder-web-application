import { createContext, useState } from "react";

const BaseContext = createContext();

const BaseContextProvider = props => {

  
  const [content, setContent] = useState("");
  const [words, setWords] = useState([]);
  const [speed, setSpeed] = useState(500);

  return (
    <BaseContext.Provider
      value={{
        content,
        setContent,
        setWords,
        words,
        speed,
        setSpeed
      }}
    >
        {props.children}
    </BaseContext.Provider>
  );
};
export { BaseContextProvider, BaseContext};