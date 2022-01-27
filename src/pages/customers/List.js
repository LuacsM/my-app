import { useState, useEffect } from "react";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import CustomersCard from "../../components/CustomersCard";
import Grid from '@mui/material/Grid';

const Customers = () => {
  const history = useHistory()
  const [customers, setCustomers] = useState([])

  useEffect(()=>{
      axios.get('http://localhost:8080/api/students/')
          .then(response=>{
              const data = response.data
              setCustomers(data)
          })
  },[])

  const handleEditCustomer = id =>{
    history.push(`/edit/${id}`)
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
  
export default Customers;
  