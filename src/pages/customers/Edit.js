import * as React from 'react';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

const Edit = () =>{
    const {id} = useParams()

  const [form, setForm] = useState({
    name:{
      value:'',
      error: false,
    },
    matricula:{
      value:'',
      error: false,
    },
    age:{
      value:'',
      error: false,
    },
    nameMother:{
      value:'',
      error: false,
    },
    cpf:{
      value:'',
      error: false,
    },
    tel:{
      value:'',
      error: false,
    },
    tel2:{
      value:'',
      error: false,
    },
    email:{
      value:'',
      error: false,
    },
    cep:{
      value:'',
      error: false,
    },
    address:{
      value:'',
      error: false,
    },
    numHouse:{
      value:'',
      error: false,
    },
    city:{
      value:'',
      error: false,
    },
    district:{
      value:'',
      error: false,
    },
    complement:{
      value:'',
      error: false,
    },

  })

  const [customers, setCustomers] = useState([])

  useEffect(()=>{
    axios.get(`http://localhost:8080/api/students/${id}`)
        .then(response =>{
            const [data] = response.data

            console.log(data)
            setForm({
                name:{
                  value: data.name,
                  error: false,
                },
                matricula:{
                  value: data.matricula,
                  error: false,
                },
                age:{
                  value: data.age,
                  error: false,
                },
                nameMother:{
                  value: data.nameMother,
                  error: false,
                },
                cpf:{
                  value:data.cpf,
                  error: false,
                },
                tel:{
                  value:data.tel,
                  error: false,
                },
                tel2:{
                  value:data.tel2,
                  error: false,
                },
                email:{
                  value:data.email,
                  error: false,
                },
                cep:{
                  value:data.cep,
                  error: false,
                },
                address:{
                  value:data.address,
                  error: false,
                },
                numHouse:{
                  value: data.numHouse,
                  error: false,
                },
                city:{
                  value: data.city,
                  error: false,
                },
                district:{
                  value: data.district,
                  error: false,
                },
                complement:{
                  value: data.complement,
                  error: false,
                },

              })
        })
},[])

  const handleInputChange = (e) =>{
    const {name, value} = e.target

    setForm({
      ...form,
      [name]: {
        value,
      },
    })
  }

  const handleRegisterButton = () =>{
    let hasError = false;
    let newFormState = {
      ...form,
    }

    if(!form.name.value){
      hasError = true
        newFormState.name = {
          value: form.name.value,
          error: true,
        }
    }
    if(!form.matricula.value){
      hasError=true
      newFormState.matricula = {
        value: form.matricula.value,
        error: true,
      }
    }

    if(!form.age.value){
      hasError=true
      newFormState.age = {
        value: form.age.value,
        error: true,
      }
    }
    if(!form.nameMother.value){
      hasError=true
      newFormState.nameMother = {
        value: form.nameMother.value,
        error: true,
      }
    }
    if(!form.cpf.value){
      hasError=true
      newFormState.cpf = {
        value: form.cpf.value,
        error: true,
      }
    }
    if(!form.tel.value){
      hasError=true
      newFormState.tel = {
        value: form.tel.value,
        error: true,
      }
    }
    if(!form.tel2.value){
      hasError=true
      newFormState.tel2 = {
        value: form.tel2.value,
        error: true,
      }
    }
    if(!form.email.value){
      hasError=true
      newFormState.email = {
        value: form.email.value,
        error: true,
      }
    }
    if(!form.cep.value){
      hasError=true
      newFormState.cep = {
        value: form.cep.value,
        error: true,
      }
    }
    if(!form.address.value){
      hasError=true
      newFormState.address = {
        value: form.address.value,
        error: true,
      }
    }
    if(!form.numHouse.value){
      hasError=true
      newFormState.numHouse = {
        value: form.numHouse.value,
        error: true,
      }
    }
    if(!form.city.value){
      hasError=true
      newFormState.city = {
        value: form.city.value,
        error: true,
      }
    }
    if(!form.district.value){
      hasError=true
      newFormState.district = {
        value: form.district.value,
        error: true,
      }
    }
    if(!form.complement.value){
      hasError=true
      newFormState.complement = {
        value: form.complement.value,
        error: true,
      }
    }


    if(hasError){
      return setForm(newFormState)
    }

    axios.put(`http://localhost:8080/api/students/${id}`, {
      name: form.name.value,
      matricula: form.matricula.value,
      age: form.age.value,
      nameMother: form.nameMother.value,
      cpf: form.cpf.value,
      tel: form.tel.value,
      tel2: form.tel2.value,
      email: form.email.value,
      cep: form.cep.value,
      address: form.address.value,
      numHouse: form.numHouse.value,
      city: form.city.value,
      district: form.district.value,
      complement: form.complement.value,
    }).then( (response)=>{
      console.log('ok', response)
    })

  }

    return(
        <>
        <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            error={form.name.error}
            label="Nome Completo"
            helperText="Preenche certo menino"
            fullWidth
            
            name="name"
            value={form.name.value}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            error={form.matricula.error}
            label="Matrícula"
            helperText="Preenche certo menino"
            fullWidth
            
            name="matricula"
            value={form.matricula.value}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            error={form.age.error}
            name="age"
            label="Data de Nascimento"
            fullWidth
            
            value={form.age.value}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={form.nameMother.error}
            name="nameMother"
            label="Nome da Mãe"
            fullWidth
            
            value={form.nameMother.value}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={form.cpf.error}
            name="cpf"
            label="CPF da Mãe"
            fullWidth
            
            value={form.cpf.value}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            error={form.tel.error}
            name="tel"
            label="Contato 1"
            fullWidth
            
            value={form.tel.value}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            error={form.tel2.error}
            name="tel2"
            label="Contato 2"
            fullWidth
            
            value={form.tel2.value}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            error={form.email.error}
            name="email"
            label="Email"
            fullWidth
            
            value={form.email.value}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            error={form.cep.error}
            name="cep"
            label="CEP"
            fullWidth
            
            value={form.cep.value}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <TextField
            required
            error={form.address.error}
            name="address"
            label="Endereço"
            fullWidth
            
            value={form.address.value}
            onChange={handleInputChange}
          /> 
        </Grid>
        <Grid item xs={12} sm={2}>
          <TextField
            required
            error={form.numHouse.error}
            name="numHouse"
            label="Número"
            fullWidth
            
            value={form.numHouse.value}
            onChange={handleInputChange}
          /> 
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            error={form.city.error}
            name="city"
            label="Município"
            fullWidth
            
            value={form.city.value}
            onChange={handleInputChange}
          /> 
        </Grid>
        <Grid item xs={12} sm={3}>
          <TextField
            required
            error={form.district.error}
            name="district"
            label="Bairro"
            fullWidth
            
            value={form.district.value}
            onChange={handleInputChange}
          /> 
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            error={form.complement.error}
            name="complement"
            label="Complemento"
            fullWidth
            autoComplete="shipping country"
            
            value={form.complement.value}
            onChange={handleInputChange}
          /> 
        </Grid>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={handleRegisterButton}>Primary</Button>
        </Grid>
      </Grid>
    </React.Fragment>
        </>
    )
}

export default Edit 