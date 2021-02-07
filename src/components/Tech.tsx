import React from 'react';
import { IconType } from 'react-icons';

import { Tech as Container } from "../styles/components/tech";

interface ITech {
    color: string,
    Icon: IconType,
    width: number,
    height: number,
    title: string
}

const Tech: React.FC<ITech> = ({ color, Icon, width, height, title }) => {
    return (
        <Container color={color} width={width} height={height}>
            <p>{title}</p>
            {<Icon/>}
        </Container>
    )
}

export default Tech;