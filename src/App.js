import { BrowserRouter as Router, Route} from 'react-router-dom';
import Jobs from './components/Jobs';
import Home from './components/Home';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Animals from './components/Animals';
import Words from './components/Words';
import Lista from './components/List';
import Learn from './components/Learn/LearnHome';
import Exersize from './components/Learn/Exersize/Exersize';
function App() {

  return (
    
      <Router className="App">
          <Switch>
              <Route exact path='/'> <Home /> </Route>
              <Route path="/jobs"><Jobs /></Route>
              <Route path="/animals"><Animals /></Route>
              <Route path="/words"><Words /></Route>
              <Route path="/words"><Words /></Route>
              <Route path="/list"><Lista /></Route>
              <Route path="/learn"><Learn /></Route>
              <Route path="/exersize"><Exersize /></Route>

          </Switch>
      </Router>
    
  );
}

export default App;
