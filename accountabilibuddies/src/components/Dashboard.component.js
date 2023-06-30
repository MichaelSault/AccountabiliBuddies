import MainCard from './MainCard.component';
import Grid from '@mui/material/Grid';

import '../App.css';


export default function Dashboard() {
    return(
        <>
            <Grid container spacing={0.5}>
                <Grid item xs={4}>
                    <MainCard title="100 Days of Code" secondary="daily" background="#006699" width="200px"/>
                </Grid>
                <Grid item xs={4}>
                    <MainCard title="Read Before Bed" secondary="4x weekly" background="#663366"/>
                </Grid>
                <Grid item xs={4}>
                    <MainCard title="Get 8 hours of sleep" secondary="daily" background="firebrick"/>
                </Grid>
            </Grid>
            
            <MainCard title="Mow the Lawn" secondary="weekly" background="darkgreen"/>
        </>
    );
    
}