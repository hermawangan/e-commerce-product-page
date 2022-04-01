import "./App.css";
import Nav from "./Components/Nav";
import store from "./redux/store";
import { Provider } from "react-redux";
import Content from "./Components/Content";
import React, { useState } from "react";

function App() {
  const [click, setClick] = useState(false);
  return (
    <Provider store={store}>
      <div className="App">
        <Nav setClick={setClick} click={click} />
        <Content setClick={setClick} click={click} />
      </div>
    </Provider>
  );
}

export default App;
