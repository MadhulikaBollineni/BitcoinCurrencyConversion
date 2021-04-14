import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./Store";
import "./App.css";
import MainPage from './MainPage';

function App() {
  return (
    <div className="App1">
      <Provider store={store}>        
        <MainPage />
      </Provider>
    </div>
  );
}

export default App;
