import { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import CustomersCard from "../../components/CustomersCard";
import Grid from '@mui/material/Grid';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const Student = () => {
  const {id} = useParams()
  const history = useHistory()

    const [customers, setCustomers] = useState([])

  const token = localStorage.getItem("token");
  useEffect(()=>{
    axios.get('http://localhost:8080/projects/', 
    { headers: { Authorization:`Bearer ${token}`} })
  .then(response => {
            // If request is good...
            //console.log(response.data);
            const dados = response.data;
            const aluno = dados.user;
            setCustomers([aluno])
            console.log(aluno)
          })
        .catch((error) => {
            console.log(error)
          })
  },[])
   

    

    const handleEditCustomer = id =>{
      history.push(`/unedit/`)
    }

    return (
      <>
        <Grid container>
          {
            customers.map(item =>(
              <Grid item xs={12} md={4} key={item._id}>
                <CustomersCard
                  name= {item.name}
                  matricula={item.matricula}
                  age={item.age}
                  id={item._id}
                  onEditCustomer={handleEditCustomer}
                />
              </Grid>
            ))
          }
        </Grid>
      </>
    )
  }
  
  export default Student;
  