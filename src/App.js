import "./App.css";
import Nav from "./Components/Nav";
import store from "./redux/store";
import { Provider } from "react-redux";
import Content from "./Components/Content";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Nav />
        <Content />
      </div>
    </Provider>
  );
}

export default App;
