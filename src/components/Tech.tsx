import React from 'react';
import { IconType } from 'react-icons';

import { Tech as Container } from "../styles/components/tech";
interface ITech {
    color: string,
    Icon: IconType,
    width: number,
    height: number
}

const Tech: React.FC<ITech> = ({ color, Icon, width, height }) => {
    return (
        <Container color={color} width={width} height={height}>
            {<Icon/>}
        </Container>
    )
}

export default Tech;