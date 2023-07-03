import { forwardRef } from 'react';

import MainCard from './MainCard.component';

import '../App.css';

const HabitCard = forwardRef(
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
  
        return (
        <>
            <MainCard title={title} secondary={secondary} background={background} width={width} height={height}/>
        </>
        )
    }
    );
    
export default HabitCard;