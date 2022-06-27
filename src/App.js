import{
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import Home from './pages/Home';
import Student from './pages/customers/Student'
import SignIn from './pages/customers/Search';
import UnEdit from './pages/customers/UnEdit'


import TemplatePage from './templates/Page'

import { isAuthenticate } from './auth';



const PrivateRoute = ({component, ...rest}) => (
  <Route 
    {...rest}
    render={props =>
      isAuthenticate() ? (
        
          <TemplatePage Component={component} {...rest}/>
        
      ):(
        
          <TemplatePage Component={SignIn}/>
        
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
            
              <TemplatePage  Component={SignIn} />
            
          </Route>
          
          <Route path="">
            
              <TemplatePage Component={Home} />
            
          </Route>
        </Switch>
   
      </Router>
    
  )
}

export default App;
