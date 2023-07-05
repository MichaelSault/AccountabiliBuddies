import { forwardRef } from 'react';

import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

import '../App.css';

// constant
const headerSX = {
    '& .MuiCardHeader-action': { mr: 0 }
};

const OverviewCard = forwardRef(
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
        </Card>
        );
        }
    );
    
export default OverviewCard;