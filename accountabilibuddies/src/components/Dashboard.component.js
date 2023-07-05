import Grid from '@mui/material/Grid';

import '../App.css';

import HabitCard from './HabitCard.component';
import OverviewCard from './OverviewCard.component';
import TaskCard from './TasksCard.component';


export default function Dashboard() {
    return(
        <>
            <Grid container spacing={0.5}>
                <Grid item xs={4}>
                    <HabitCard title="100 Days of Code" secondary="daily" background="#006699" width="200px"/>
                </Grid>
                <Grid item xs={4}>
                    <HabitCard title="Read Before Bed" secondary="4x weekly" background="#663366"/>
                </Grid>
                <Grid item xs={4}>
                    <HabitCard title="Get 8 hours of sleep" secondary="daily" background="firebrick"/>
                </Grid>
            </Grid>
            <Grid container spacing={0.5}>
                <Grid item xs={9}>
                    <OverviewCard title="Current Streaks" secondary="75%" background="grey" height="600px"/>
                </Grid>
                <Grid item xs={3}>
                    <TaskCard title="Upcoming Tasks" secondary="July 3rd" background="purple" height="600px"/>
                </Grid>
            </Grid>
            
            
            
        </>
    );
    
}