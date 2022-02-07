import{
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import Home from './pages/Home';
import Customers from './pages/customers/List';
import Student from './pages/customers/Student'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'
import CustomersRegister from './pages/customers/Register'
import Edit from './pages/customers/Edit';
import SignIn from './pages/customers/Search';
import UnRegister from './pages/customers/UnRegister';
import UnEdit from './pages/customers/UnEdit'
import { Component } from 'react';
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
         
          <PrivateRoute path="/unedit" component={UnEdit}/>
          
          <Route path="/unregister">
            <TemplatePage title="UnRegister" Component={UnRegister} />
          </Route>
        <Route path="/student">
            <TemplatePage title="Aluno" Component={Student} />
          </Route>
          <Route path="/edit/:id">
            <TemplatePage  Component={Edit} />
          </Route>
          <Route path="/search">
            <TemplatePage  Component={SignIn} />
          </Route>
          <Route path="/add">
            <TemplatePage  Component={CustomersRegister} />
          </Route>
          <Route path="/customers">
            <TemplatePage title="Alunos" Component={Customers} />
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
