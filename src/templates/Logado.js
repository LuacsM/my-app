import Container from '@mui/material/Container';

import NavAuth from '../partials/Header/NavAuth';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  Container: {
    flexGrow: 1,
    padding: "15px 0",
  },
});

const Logado = ({children}) => {
    const classes = useStyles()
    return(
        <>
          <NavAuth/>
          <Container maxWidth="lg" className={classes.Container}>
              {children}
          </Container>
            
        </>
    )
}

export default Logado