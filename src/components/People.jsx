import { people } from '../utils/people'
import Grid from '@mui/material/Grid';
import PeopleCard from './PeopleCard'
import { Typography } from '@mui/material';

const People = () => {
    return(
        <div style={{paddingRight:'10%',paddingLeft:'10%', paddingBottom:'5%', backgroundColor:'#F4F6F7'}}>
            <Typography variant='h3' sx={{paddingTop:'2%', paddingBottom:'2%'}}>Our Team</Typography>
            <Grid container spacing={3}>
                {people.map(p=> (
                        <Grid size={{ xs: 6, md: 3 }}>
                            <PeopleCard name={p.name} img={p.img} expertise={p.expertise} desc={p.about} designation={p.designation}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default People