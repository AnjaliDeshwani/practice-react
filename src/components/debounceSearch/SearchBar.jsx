import { useRef } from "react";

export const SearchBar = () => {
  const inputRef = useRef("");

  const getData = (value) => {
    console.log(value);
  };

  const debounce = (func, delay) => {
    let timer;
    return () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(inputRef.current.value);
      }, delay);
    };
  };

  const searchHandler = debounce(getData, 1000);

  return (
    <div>
      <div>Type to search</div>
      <input type="text" ref={inputRef} onChange={searchHandler} />
    </div>
  );
};

//better approach using useState, as controlled input component
// https://codesandbox.io/s/debounce-react-ct9fyz?file=/src/App.js
