import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from './pages/Home';
import Student from './pages/customers/Student'
import SignIn from './pages/customers/Search';
import UnEdit from './pages/customers/UnEdit'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'

import { isAuthenticate } from './auth';



const PrivateRoute = ({component, ...rest}) => (
  <Route 
    {...rest}
    render={props =>
      isAuthenticate() ? (
        <TemplatePage Component={component} {...rest}/>
      ):(
        <Redirect to={{pathname: "/search", state: {from: props.location}}} />
      )
    }
  
  />
);


const App = () => {
  return (
    
      <Router>
        <TemplateDefault>
        <Switch>
         
          <PrivateRoute path="/unedit/:id" component={UnEdit}/>
          
          
          <PrivateRoute path="/student" component={Student} />
          
          
          <Route path="/search">
            <TemplatePage  Component={SignIn} />
          </Route>
          
          <Route path="">
            <TemplatePage Component={Home} />
          </Route>
        </Switch>
        </TemplateDefault>
      </Router>
    
  )
}

export default App;
