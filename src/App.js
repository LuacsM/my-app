import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home';
import TemplateDefault from './templates/Default'

const App = () => {
  return (
    <TemplateDefault>
      <Router>
        <Switch>
          <Route path="">
            <Home />
          </Route>
        </Switch>
      </Router>
    </TemplateDefault>
  )
}

export default App;
