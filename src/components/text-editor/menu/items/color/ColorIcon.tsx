import {textColors} from "./text-colors.tsx";
import React from "react";
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import {StyledColorHighlight, StyledColorIconRoot} from "./EditorMenuHighlight.styled.tsx";

type ColorIconProps = {
    icon: 'text' | 'fill'
    color?: typeof textColors[number]
}

export const ColorIcon: React.FC<ColorIconProps> = ({color, icon}) => {
    const defaultColor: string = icon === 'text' ? '#000000' : '#ffffff'
    const iconComponent = icon === 'text' ? <FormatColorTextOutlinedIcon/> : <FormatColorFillOutlinedIcon/>

    return <StyledColorIconRoot>
        {iconComponent}
        <StyledColorHighlight highlight={color || defaultColor}/>
    </StyledColorIconRoot>
}
