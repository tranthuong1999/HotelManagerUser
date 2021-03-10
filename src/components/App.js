import Footer from './Footer';
import Header from './Header';
import './../css/App.css';
import ControlURL from '../router/ControlURL';
import history from './history'


import {
 BrowserRouter,
 Router, Switch
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <Header/>
        <ControlURL />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
