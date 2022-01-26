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

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/students/${id}`)
            .then(response=>{
                const data = response.data
                setCustomers(data)
            })
    })

    const handleEditCustomer = id =>{
      history.push(`/edit/${id}`)
    }

    return (
      <>
        <Grid container>
          {
            customers.map(item =>(
              <Grid item xs={12} md={4}>
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
  