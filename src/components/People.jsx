import { contacts } from '../utils/contacts'
import Grid from '@mui/material/Grid';
import PeopleCard from './PeopleCard'
import { Modal, Typography } from '@mui/material';
import { useState } from 'react';
import PersonDesc from './PersonDesc';

const People = () => {
    const [viewModal, setViewModal] = useState(false)
    const viewer = ()=>setViewModal(true)
    return(
        <>
        <div style={{paddingRight:'10%',paddingLeft:'10%', paddingBottom:'5%', backgroundColor:'#F4F6F7'}}>
            <Typography variant='h3' sx={{paddingTop:'2%', paddingBottom:'2%'}}>Our Team</Typography>
            <Grid container spacing={3}>
                <Grid size={{ xs: 6, md: 3 }}>
                    <PeopleCard clickFunc={viewer}/>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <PeopleCard clickFunc={viewer}/>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <PeopleCard clickFunc={viewer}/>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <PeopleCard clickFunc={viewer}/>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <PeopleCard clickFunc={viewer}/>
                </Grid>
                <Grid size={{ xs: 6, md: 3 }}>
                    <PeopleCard clickFunc={viewer}/>
                </Grid>
            </Grid>
        </div>
        <Modal>
            <PersonDesc/>
        </Modal>
        </>
    )
}

export default People