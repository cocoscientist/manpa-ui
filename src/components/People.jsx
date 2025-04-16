import { contacts } from '../utils/contacts'
import Grid from '@mui/material/Grid';
import PeopleCard from './PeopleCard'
import { Typography } from '@mui/material';

const People = () => {
    return(
        <div style={{paddingRight:'10%',paddingLeft:'10%', paddingBottom:'5%', backgroundColor:'#FEF7E7'}}>
            <Typography variant='h3' sx={{paddingTop:'2%', paddingBottom:'2%'}}>Our Team</Typography>
            <Grid container spacing={3}>
                <Grid size={{ xs: 6, md: 3 }}>
                    <PeopleCard/>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <PeopleCard/>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <PeopleCard/>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <PeopleCard/>
                </Grid>
            </Grid>
        </div>
    )
}

export default People