import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CustomersCard = ({
    id,
    name,
    matricula,
    nameMother,
    cpf,
    tel,
    tel2,
    email,
    cep,
    address,
    numHouse,
    city,
    district,
    complement,
    onEditCustomer,
}) => {

  const handleEditCustomers = id =>{
    onEditCustomer(id)
  }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "xg", marginBottom: "30px",}}>
        <CardHeader
            title={`${name}`}
            subheader={`${matricula}`}
            
        />
      <CardActions>
        <Button size="small" onClick={()=>handleEditCustomers(id)}>Editar</Button>
        <Button size="small" 
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">Leia Mais</Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color="text.secondary">Nome da Mãe: {nameMother}</Typography>
          <Typography paragraph color="text.secondary">CPF da Mãe: {cpf}</Typography>
          <Typography paragraph color="text.secondary">Contato 1: {tel}</Typography>
          <Typography paragraph color="text.secondary">Contato 2: {tel2}</Typography>
          <Typography paragraph color="text.secondary">Email: {email}</Typography>
          <Typography paragraph color="text.secondary">CEP: {cep}</Typography>
          <Typography paragraph color="text.secondary">Endereço: {address}</Typography>
          <Typography paragraph color="text.secondary">Número: {numHouse}</Typography>
          <Typography paragraph color="text.secondary">Município 2: {city}</Typography>
          <Typography paragraph color="text.secondary">Bairro: {district}</Typography>
          <Typography paragraph color="text.secondary">Complemento: {complement}</Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CustomersCard
