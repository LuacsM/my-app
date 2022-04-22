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
import Logado from './templates/Logado'
import TemplatePage from './templates/Page'

import { isAuthenticate } from './auth';



const PrivateRoute = ({component, ...rest}) => (
  <Route 
    {...rest}
    render={props =>
      isAuthenticate() ? (
        <Logado>
          <TemplatePage Component={component} {...rest}/>
        </Logado>
      ):(
        <Redirect to={{pathname: "/search", state: {from: props.location}}} />
      )
    }
  
  />
);


const App = () => {
  return (
    
      <Router>
      
        <Switch>
         
          <PrivateRoute path="/unedit/:id" component={UnEdit}/>
          
          
          <PrivateRoute path="/student" component={Student} />
          
          
          <Route path="/search">
            <TemplateDefault>
              <TemplatePage  Component={SignIn} />
            </TemplateDefault>
          </Route>
          
          <Route path="">
            <TemplateDefault>
              <TemplatePage Component={Home} />
            </TemplateDefault>
          </Route>
        </Switch>
   
      </Router>
    
  )
}

export default App;
