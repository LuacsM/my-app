import Copyright from "../partials/Footer/Copyright";
import * as React from 'react';
import {useHistory} from 'react-router-dom'

import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  Container: {
    flexGrow: 1,
    marginTop: "40px",
    marginBottom: "100px",
  },
});



const Home = () => {
  const history = useHistory()
  const handleMenuClick = route =>{
    history.push(route)
  }

  const classes = useStyles()
    return (
      <>
        
          <Container maxWidth="md" className={classes.Container}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Formulário dos alunos
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Esse formulario se destina à coleta e atualização de informações a respeito dos alunos. 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={()=> handleMenuClick("/search")}>Responder Formulario</Button>
              <Button variant="outlined">Mais Sobre</Button>
            </Stack>
          </Container>
       
        <Copyright />
      </>
    )
  }
  
  export default Home;
  