import Typography from '@mui/material/Typography';
import TemplateDefault from './Default'


const Page = ({title, Component}) => {
    return(
        <>
            <TemplateDefault>
                <Typography variant='h3'>
                    {title}
                </Typography>
                <Component />
            </TemplateDefault>
        </>
    )
}

export default Page