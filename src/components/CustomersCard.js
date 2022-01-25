import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';


const CustomersCard = ({
    id,
    name,
    age,
    matricula,
    onEditCustomer,
}) => {

  const handleEditCustomers = id =>{
    onEditCustomer(id)
  }

  return (
    <Card sx={{ maxWidth: 345, marginBottom: "30px",}}>
        <CardHeader
            title={`${name}`}
            subheader={`${matricula} ${id}`}
            
        />
      <CardActions>
        <Button size="small" onClick={()=>handleEditCustomers(id)}>Editar</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CustomersCard
