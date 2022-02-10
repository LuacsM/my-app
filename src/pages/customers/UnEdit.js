import * as React from 'react';
import {useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

import axios from 'axios'
import * as Yup from 'yup';
import {useHistory} from 'react-router-dom'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Form } from '@unform/web';
import  Input  from '../../components/Form/Input';

import FormattedInputs from '../../components/Form/MaskData'
import MaskTel from '../../components/Form/MaskTel'
import MaskCpf from '../../components/Form/MaskCpf'
import MaskCep from '../../components/Form/MaskCep'
import Toasty from '../../components/Toasty'

const UnEdit = () => {
  const {id} = useParams()
  const formRef = useRef(null);
  const history = useHistory()

  const [openToasty, setOpenToasty] = React.useState(false)
  const [isLoadding, setIsLoadding] = React.useState(false)
  const token = localStorage.getItem("token");
  
  useEffect(()=>{
    const token = localStorage.getItem("token");
    // Receber a string
    let alunoString = localStorage.getItem('aluno');
    // transformar em objeto novamente
    let data = JSON.parse(alunoString);
    
      console.log(data)
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
        
  },[])
    



  async function handleCepChange(e) {
    
    await axios.get(`https://viacep.com.br/ws/${localStorage.getItem("cepAluno")}/json`).then((response) =>{
      formRef.current.setFieldValue('address', response.data.logradouro);
      formRef.current.setFieldValue('city', response.data.localidade);
      formRef.current.setFieldValue('district', response.data.bairro);
    });
    
  }

    async function handleSubmit(data){
      try {

        const schema = Yup.object().shape({
          name: Yup.string().required('O nome é obrigatório'),
          matricula: Yup.string().required('A matrícula é obrigatória'),
          age: Yup.string().required('A data de nascimento é obrigatória'),
          nameMother: Yup.string().required('O nome da mãe é obrigatório'),
          cpf: Yup.string().required('O CPF da mãe é obrigatório'),
          tel: Yup.string().required('O contato é obrigatório'),
          tel2: Yup.string().required('O contato é obrigatório'),
          email: Yup.string().email("Digite um e-mail válido").required('O e-mail é obrigatório'),
          cep: Yup.string().required('O CEP é obrigatório'),
          address: Yup.string().required('O endereço é obrigatório'),
          numHouse: Yup.string().required('O número da residência é obrigatório'),
          city: Yup.string().required('O município é obrigatório'),
          district: Yup.string().required('O bairro é obrigatório'),
          complement: Yup.string().required('O complemento é obrigatório'),
  
        });
  
        await schema.validate(data, {
  
          abortEarly: false,
  
        });
  
        // Validation passed
        setIsLoadding(true)
        axios.put(`http://localhost:8080/projects/${id}`, {
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
      
        }, { headers: { Authorization:`Bearer ${token}`} }).then( (response)=>{
          console.log('ok', response)
          localStorage.setItem('aluno', JSON.stringify(data));
          localStorage.setItem("confirmEdit", "true");
          setIsLoadding(false)
          history.push('/student')
        }).catch(function (error) {
          localStorage.removeItem('token');
          history.push('/search')
        });

        
  
      } catch (err) {
  
        if (err instanceof Yup.ValidationError) {
  
          // Validation failed
          const errorMessages = {};
          err.inner.forEach(error =>{
            errorMessages[error.path] = error.message;
          })

          formRef.current.setErrors(errorMessages);
        }
  
      }
    
  }
  

    return(
        
      <React.Fragment>
      
        <Grid container marginTop="20px" marginBottom="15px">
          <Typography
            component="h1"
            variant="h4"
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Formulário
          </Typography>
        </Grid>
      <Form onSubmit={handleSubmit} ref={formRef}>
        <Grid container spacing={3}>
          <Grid item xs={12}sm={6}>
            <Input name="name" label="Nome" variant="outlined" InputProps={{readOnly: true,}} fullWidth></Input>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input name="matricula" label="Matrícula" variant="outlined" InputProps={{readOnly: true,}} fullWidth/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Input name="age" label="Data de Nascimento" variant="outlined" InputProps={{readOnly: true,}} fullWidth />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input name="nameMother" label="Nome da Mãe" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MaskCpf name="cpf" label="CPF da Mãe" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MaskTel name="tel" label="Contato 1" variant="outlined" fullWidth /> 
          </Grid>
          <Grid item xs={12} sm={4}>
            <MaskTel name="tel2" label="Contato 2" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Input name="email" label="Email" variant="outlined" fullWidth/>
          </Grid>
          <Grid item xs={12} sm={3} onChange={handleCepChange}>
            <MaskCep name="cep"  label="CEP" variant="outlined" fullWidth />
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
            <Button variant="contained" type='submit' disabled={isLoadding}>{
              isLoadding ? 'Aguarde...' : 'Salvar'
            }</Button>
          </Grid>
          <Toasty open={openToasty} severity="success" text="Dados Alterados com Sucesso!" onClose={()=> setOpenToasty(false)}/>
        </Grid>
      </Form>
    </React.Fragment>
       
    )
}

export default UnEdit