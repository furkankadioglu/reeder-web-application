import { createContext, useState } from "react";

const Base = createContext();

const BaseProvider = props => {

  
  const [content, setContent] = useState("");
  const [words, setWords] = useState([]);
  const [speed, setSpeed] = useState(100);

  return (
    <Base.Provider
      value={{
        content,
        setContent
      }}
    >
        {props.children}
    </Base.Provider>
  );
};
export { BaseProvider, Base };