import "./App.css";
import { Memo } from "./components/useMemo/Memo";
import { Parent } from "./components/useCallback/Parent";
import { SearchBar } from "./components/debounceSearch/SearchBar";
import InfiniteScrollOne from "./components/infiniteScrollOne/InfiniteScrollOne";
import { InfiniteScrollTwo } from "./components/infiniteScrollTwo/InfiniteScrollTwo";
import { Accordian } from "./components/accordian/Accordian";
import { AccordianContainer } from "./components/accordian1/AccordianContainer";
import MyComponent from "./components/hoc/MyComponent";
// import { List } from "./components/list/List";
import { List } from "./components/ListCrud/List";
import { FileExplorer } from "./components/fileExplorer/FileExplorer";

function App() {
  return (
    <div className="App">
      {/* <Memo /> */}
      {/* <Parent /> */}
      {/* <SearchBar /> */}
      {/* <InfiniteScrollOne /> */}
      {/* <InfiniteScrollTwo /> */}
      {/* <Accordian /> */}
      {/* <AccordianContainer /> */}
      {/* <MyComponent /> */}
      {/* <List /> */}
      <FileExplorer />
    </div>
  );
}

export default App;
