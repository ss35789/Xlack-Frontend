
import './App.css';
import Header from './components/Header';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Header/>}>
            
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
