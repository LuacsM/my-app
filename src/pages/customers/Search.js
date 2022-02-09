import * as React from 'react';
import axios from "axios";
import {useHistory} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import * as Yup from 'yup';
import { useRef } from 'react';
import { Form } from '@unform/web';

import Matricula from '../../components/Form/MaskMatricula'
import  Data  from '../../components/Form/MaskData';

import Copyright from '../../partials/Footer/Copyright'
import { makeStyles } from '@material-ui/styles';

import Toasty from '../../components/Toasty'

const useStyles = makeStyles({
  Formulario: {
    marginTop: "25px",
  },
  
});


const theme = createTheme();

export default function SignIn() {
  const formRef = useRef(null);
  const classes = useStyles()
  const [openToasty, setOpenToasty] = React.useState(false)

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        matricula: Yup.string().required("A Matricula é obrigatória."),
        age: Yup.string().min(10, "Insira uma data válida (dd-mm-aaaa)").required("A Data de Nascimento é obrigatória."),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      // Validation passed      
      axios({
        method: 'post',
        url: 'http://localhost:8080/auth/authenticate/',
        data: {
          matricula: data.matricula,
          age: data.age
        }
      }).then(function (response) {
        //console.log(response);
        const dados = response.data;
        localStorage.setItem('aluno', JSON.stringify(dados.user));
        localStorage.setItem('idAlunoSeducAm', dados.user._id);
        console.log(dados.user)
        localStorage.setItem("token",dados.token);

        window.location.href="/student"

      })
      .catch(function (error) {
        console.log(error);
        setOpenToasty(true)
      });

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
  
        // Validation failed
        const errorMessages = {};
        err.inner.forEach(error =>{
          errorMessages[error.path] = error.message;
        })
        console.log("error")
        formRef.current.setErrors(errorMessages);
      }

    }

  }

  const history = useHistory()


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 5,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form ref={formRef} onSubmit={handleSubmit}  sx={{ mt: 1 }} className={classes.Formulario}> 
            <Matricula 
              margin="normal"
              variant="outlined"
              fullWidth
              id="matricula"
              label="Matrícula do Aluno"
              name="matricula"
              
            />
            <Data
              margin="normal"
              variant="outlined"
              fullWidth
              id="age"
              name="age"
              label="Data de Nascimento"
              type="txt"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Entrar
            </Button>
            <Toasty  severity="error" text="Dados Incorretos"></Toasty>
            </Form>
            <Grid container>
              <Grid item xs>
                <Link href="https://portaleducacional.seduc.am.gov.br/#!/consulta-aluno" target="_blank" variant="body2">
                  Não sabe sua Matrícula?
                </Link>
              </Grid>
            </Grid>
            <Toasty open={openToasty} severity="error" text="Algum dado está incorreto" onClose={()=> setOpenToasty(false)}/>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}