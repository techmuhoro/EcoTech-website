import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { home, projects, error } from './pages';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={home} />
          <Route exact path='/projectsss' component={projects} />
          <Route component={error} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
