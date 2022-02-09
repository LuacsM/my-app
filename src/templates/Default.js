import Container from '@mui/material/Container';

import ResponsiveAppBar from '../partials/Header/NavBar';
import NavAuth from '../partials/Header/NavAuth'

import { isAuthenticate } from '../auth';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  Container: {
    flexGrow: 1,
    padding: "15px 0",
  },
});

const PrivateRoute = () => (
      isAuthenticate() ? (
        <NavAuth  />
      ):(
        <ResponsiveAppBar />
      )
);



const Default = ({children}) => {
    const classes = useStyles()
    return(
        <>
          <PrivateRoute />
          <Container maxWidth="lg" className={classes.Container}>
              {children}
          </Container>
            
        </>
    )
}

export default Default