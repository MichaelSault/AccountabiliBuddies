import Grid from '@mui/material/Grid';

import '../App.css';

import HabitCard from './HabitCard.component';


export default function Dashboard() {
    return(
        <>
            <Grid container spacing={0.5}>
                <Grid item xs={4}>
                    <HabitCard title="100 Days of Code" secondary="daily" background="#006699" width="200px"/>
                </Grid>
                <Grid item xs={2.5}>
                    <HabitCard title="Read Before Bed" secondary="4x weekly" background="#663366"/>
                </Grid>
                <Grid item xs={2.5}>
                    <HabitCard title="Get 8 hours of sleep" secondary="daily" background="firebrick"/>
                </Grid>
                <Grid item xs={3}>
                    <HabitCard title="Mow the Lawn" secondary="weekly" background="darkgreen"/>
                </Grid>
            </Grid>
            <Grid container spacing={0.5}>
                <Grid item xs={9}>
                    <HabitCard title="Mow the Lawn" secondary="weekly" background="grey"/>
                </Grid>
                <Grid item xs={3}>
                    <HabitCard title="Mow the Lawn" secondary="weekly" background="purple"/>
                </Grid>
            </Grid>
            
            
            
        </>
    );
    
}