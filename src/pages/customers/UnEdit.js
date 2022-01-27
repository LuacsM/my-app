import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Form } from '@unform/web';
import  Input  from '../../components/Form/Input';

const UnEdit = () => {
    const {id} = useParams()
    const formRef = useRef(null);
    

    useEffect(() => {

        axios.get(`http://localhost:8080/api/students/${id}`)
            .then(user => {
                const [data] = user.data
                formRef.current.setData({ 
                    name: data.name, 
                    matricula: data.matricula, 
                    age: data.age,
                    nameMother: data.nameMother,
                    cpf: data.cpf,
                    tel: data.tel,
                    tel2: data.tel2,
                    email: data.email,
                    cep: data.cep,
                    address: data.address,
                    numHouse: data.numHouse,
                    city: data.city,
                    district: data.district,
                    complement: data.complement,
                });
            });
    }, []);

    function handleSubmit(data){
        let hasError = false;
        if(data.name ===""){
            formRef.current.setFieldError('name', 'O nome é obrigatório')
            hasError = true
        }

        if(hasError){
            return 0;
        }


    axios.put('http://localhost:8080/api/students', {
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
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Grid container spacing={3}>
          <Grid item sm={6}>
          <Input name="name" label="Nome" variant="outlined" fullWidth ></Input>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input name="matricula" label="Matrícula" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input name="age" label="Data de Nascimento" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input name="nameMother" label="Nome da Mãe" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input name="cpf" label="CPF da Mãe" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input name="tel" label="Contato 1" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input name="tel2" label="Contato 2" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input name="email" label="Email" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input name="cep" label="CEP" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={7}>
            <Input name="address" label="Endereço" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Input name="numHouse" label="Número" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input name="city" label="Município" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input name="district" label="Bairro" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input name="complement" label="Complemento" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" type='submit' >Registrar</Button>
          </Grid>
          
        </Grid>
      </Form>
    </React.Fragment>
       
    )
}

export default UnEdit