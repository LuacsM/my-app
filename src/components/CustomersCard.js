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
            subheader={`${matricula} ${id}`}
            
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
          <Typography paragraph color="text.secondary">Nome da Mãe: {nameMother}</Typography>
          <Typography paragraph color="text.secondary">Nome da Mãe: {nameMother}</Typography>
          <Typography paragraph color="text.secondary">Nome da Mãe: {nameMother}</Typography>

        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CustomersCard
