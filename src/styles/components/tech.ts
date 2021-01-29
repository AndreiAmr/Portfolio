import styled from "styled-components";


export const Tech = styled.div<{ color: string, width: number, height: number }>`
    >svg {
        padding: 3px;
        height: 35px;
        width: 35px;
        border-radius: 10px;
        background-image: linear-gradient(-35deg, ${props => props.color}, #fff);
        margin: 20px;
        transition: all .5s, backgroundImage 1s
    }
    
    &:hover {
        > svg{
            color: #fff
            
        }
    }

    @media( min-width: 768px ) {
        >svg{
            height: ${props => `${props.height}px`};
            width: ${props => `${props.width}px`};   
        }
        
    }
    
`