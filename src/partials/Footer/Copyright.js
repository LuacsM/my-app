import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


const Copyright = (props) =>{
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="http://www.seduc.am.gov.br/" target="_blank">
            SEDUC
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
    );
}

export default Copyright