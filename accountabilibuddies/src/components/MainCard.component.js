import { createTheme, ThemeProvider } from '@mui/material/styles';

import { forwardRef } from 'react';
import Chart from 'chart.js/auto';
import Button from '@mui/material/Button';

import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';

import '../App.css';


// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// constant
const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 }
};

//create a theme
const buttonTheme = createTheme({
    palette: {
      primary: {
        main: '#FFFFFF',
        darker: '#053e85',
      },
    },
  });

// ==============================|| EXAMPLE CHART DATA ||============================ //
const xValues = [50,60,70,80,90];
const yValues = [7,8,8,9,9,9];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor:"rgba(0,0,255,1.0)",
      borderColor: "rgba(0,0,255,0.1)",
      data: yValues
    }]
  }
});


// ==============================|| CUSTOM MAIN CARD ||============================== //

const MainCard = forwardRef(
    (
        {
            background = '',
            border = true,
            boxShadow,
            children,
            content = true,
            contentClass = '',
            contentSX = {},
            darkTitle,
            secondary,
            shadow,
            sx = {},
            title,
            width,
            height,
            ...others
        },
        ref
    ) => {
        const theme = useTheme();
  
        return (
            <Card
                ref={ref}
                {...others}
                sx={{
                    border: border ? '1px solid' : 'none',
                    borderColor: theme.palette.primary[200] + 25,
                    borderRadius: '10px',
                    color: 'lightgrey',
                    background: background,
                    width: '100%',
                    height: height,
                    ':hover': {
                    boxShadow: boxShadow ? shadow || '0 2px 14px 0 rgb(32 40 45 / 8%)' : 'inherit'
                    },
                    ...sx 
                }}
            >
            {/* card header and action */}
            {title && <CardHeader sx={headerSX} title={darkTitle ? <Typography variant="h3">{title}</Typography> : title} action={secondary} />}
    
            {/* content & header divider */}
            {title && <Divider />}
    
            {/* card content */}
            {content && (
            <CardContent sx={contentSX} className={contentClass}>
                {children}
                <div><canvas id="myChart" style={{maxWidth: '500px', maxHeight: '200px', minHeight: '200px'}}></canvas></div>
            </CardContent>  
 
            )}
            <ThemeProvider theme={buttonTheme}>
            {/* card buttons */}
            <Button variant="outlined" startIcon={<DoneIcon/>} style={{maxWidth: '150px', minWidth: '150px'}}>Completed</Button><Button variant="outlined" startIcon={<ClearIcon/>} style={{maxWidth: '150px', minWidth: '150px'}}>Missed</Button>
            {!content && children}
            </ThemeProvider>
        </Card>
      );
    }
);

export default MainCard;