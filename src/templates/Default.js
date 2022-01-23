import Container from '@mui/material/Container';

import Header from "../partials/Header/Header"

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  Container: {
    flexGrow: 1,
    padding: "15px 0",
    background: "red",
  },
});


const Default = ({children}) => {
    const classes = useStyles()
    return(
        <>
            <Header />
            <Container maxWidth="md" className={classes.Container}>
                {children}
            </Container>
            
        </>
    )
}

export default Default