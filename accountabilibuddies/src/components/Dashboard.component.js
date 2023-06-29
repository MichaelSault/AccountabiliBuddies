import MainCard from './MainCard.component';
import '../App.css';


export default function Dashboard() {
    return(
        <>
            <MainCard title="100 Days of Code" secondary="daily" background="#006699" width="200px"/>
            <MainCard title="Read Before Bed" secondary="4x weekly" background="#663366"/>
            <MainCard title="Get 8 hours of sleep" secondary="daily" background="firebrick"/>
            <MainCard title="Mow the Lawn" secondary="weekly" background="darkgreen"/>
        </>
    );
    
}