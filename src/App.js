import {BrowserRouter as Router,Link,Routes,Route} from "react-router-dom";
import './App.css';
import Calculator from './Components/Routers/Caculator/Calculator';
import Cartoons from './Components/Routers/Cartoons/Cartoons';
import Portfolio from './Components/Routers/Portfolio/Portfolio';
function App() {
  return (
    <Router>
    <div className="App">
    <div class="links">
      <Link to="/Portfolio">Portfolio</Link>
      <br/>
      <Link to="/Calculator">Calculator</Link>
      <br/>
      <Link to="/Cartoons">Axios</Link>
      </div>
    </div>
    <Routes>
      <Route exact path = '/Portfolio' element={<Portfolio/>}></Route>
      <Route exact path = '/Calculator' element={<Calculator/>}></Route>
      <Route exact path = '/Cartoons' element={<Cartoons/>}></Route>
    </Routes>
    </Router>
  );
}
export default App;
