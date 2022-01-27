import * as React from 'react';

import axios from 'axios'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


import Button from '@mui/material/Button';
import { Form } from '@unform/web';
import  Input  from '../../components/Form/Input';

const UnRegister = () =>{

  function handleSubmit(data){
    axios.post('http://localhost:8080/api/students', {
      name: data.name,
      matricula: data.matricula,
      age: data.age,
  
    }).then( (response)=>{
      console.log('ok', response)
    })
  }
  

    return(
        
        <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
          <Input name="name" variant="outlined" InputLabelProps={{shrink: true}}></Input>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input name="matricula" variant="outlined" type="email"/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input name="age"/>
          </Grid>
          
          <Grid item xs={12}>
            <Button variant="outlined" variant="outlined" type='submit' >Registrar</Button>
          </Grid>
          
        </Grid>
      </Form>
    </React.Fragment>
       
    )
}

export default UnRegister