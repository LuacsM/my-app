import{
  BrowserRouter as Router,
  Switch,
  Route,
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

const App = () => {
  return (
    
      <Router>
        <TemplateDefault>
        <Switch>
          <Route path="/unedit">
            <TemplatePage title="UnEdit" Component={UnEdit} />
          </Route>
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
            <TemplatePage title="Home" Component={Home} />
          </Route>
        </Switch>
        </TemplateDefault>
      </Router>
    
  )
}

export default App;
