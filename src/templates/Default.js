import Container from '@mui/material/Container';

import ResponsiveAppBar from '../partials/Header/NavBar';
import NavAuth from '../partials/Header/NavAuth';

import { makeStyles } from '@material-ui/styles';

import { isAuthenticate } from '../auth';

const useStyles = makeStyles({
  Container: {
    flexGrow: 1,
    padding: "15px 0",
  },
});

const DecideNavBar = () => (
  isAuthenticate() ? (
    <NavAuth/>
  ):(
    <ResponsiveAppBar/>
  )
);
 


const Default = ({children}) => {
    const classes = useStyles()
    return(
        <>
          <DecideNavBar />
          <Container maxWidth="lg" className={classes.Container}>
              {children}
          </Container>
            
        </>
    )
}

export default Default