import MainCard from './MainCard.component';
import '../App.css';


export default function Dashboard() {
    return(
        /* table will be auto generated from db with the map function */
        <table width={'80%'} align='center'> 
            <tr>
                <td class="habit-container"><MainCard title="100 Days of Code" secondary="daily" background="#006699"/></td>
                <td class="habit-container"><MainCard title="Read Before Bed" secondary="4x weekly" background="#663366"/></td>
            </tr>
            <tr>
                <td class="habit-container"><MainCard title="Get 8 hours of sleep" secondary="daily" background="firebrick"/></td>
                <td class="habit-container"><MainCard title="Mow the Lawn" secondary="weekly" background="darkgreen"/></td>
            </tr>
        </table>
    );
    
}