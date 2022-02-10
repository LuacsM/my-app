import { useState, useEffect } from "react";
import Typography from '@mui/material/Typography';
import {useHistory} from 'react-router-dom'
import CustomersCard from "../../components/CustomersCard";
import Grid from '@mui/material/Grid';
import Toasty from '../../components/Toasty'

const Student = () => {
  const history = useHistory()

  const [customers, setCustomers] = useState([])
  const [openToasty, setOpenToasty] = useState(false)

  // Receber a string
  let alunoString = localStorage.getItem('aluno');
  // transformar em objeto novamente
  let alunoObj = JSON.parse(alunoString);
  const parts = alunoObj.name.split(' ');
  const [ nome, sobreNome ] = parts;
  useEffect(()=>{
    setCustomers([alunoObj])
    if(localStorage.getItem("confirmEdit")=== "true"){
      setOpenToasty(true);
      localStorage.setItem("confirmEdit","false");
    }
   
  }, [])
   

    

    const handleEditCustomer = ()=>{
      history.push(`/unedit/${localStorage.getItem('idAlunoSeducAm')}`)
    }
    
    return (
      <>
        <Grid container marginTop="30px">
        <Typography
              component="h1"
              variant="h5"
              align="left"
              color="text.primary"
              gutterBottom
            >
              Olá {nome}, Seja Bem Vindo!
            </Typography>
            <Typography variant="h5" align="left" color="text.secondary" paragraph>
              Neste local está seu perfil, onde pode atualizar seus dados quando for necessário.
            </Typography>
          {
            customers.map(item =>(
              <Grid item xs={12} md={12} key={item._id}>
                <CustomersCard
                  name= {item.name}
                  matricula={item.matricula}
                  age={item.age}
                  nameMother={item.nameMother}
                  cpf={item.cpf}
                  tel={item.tel}
                  tel2={item.tel2}
                  email={item.email}
                  cep={item.cep}
                  address={item.address}
                  numHouse={item.numHouse}
                  city={item.city}
                  district={item.district}
                  complement={item.complement}
                  id={localStorage.getItem('idAlunoSeducAm')}
                  onEditCustomer={handleEditCustomer}
                />
              </Grid>
            ))
          }
        </Grid>
        <Toasty open={openToasty} severity="success" text="Dados Alterados com Sucesso!" onClose={()=> setOpenToasty(false)}/>
      </>
    )
  }
  
  export default Student;
  