import Container from '@mui/material/Container';

import ResponsiveAppBar from '../partials/Header/NavBar';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  Container: {
    flexGrow: 1,
    padding: "15px 0",
  },
});


const Default = ({children}) => {
    const classes = useStyles()
    return(
        <>
            <ResponsiveAppBar />
            <Container maxWidth="md" className={classes.Container}>
                {children}
            </Container>
            
        </>
    )
}

export default Default