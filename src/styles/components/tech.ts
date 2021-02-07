import styled from "styled-components";


export const Tech = styled.div<{ color: string, width: number, height: number }>`
    max-width: 80px;
    
    > p {
        text-align: center;
        font-weight: 700;
        opacity: 0;
        transform: translateY(40px);
        transition: all .3s;
    }

    >svg {
        padding: 3px;
        height: 35px;
        width: 35px;
        border-radius: 10px;
        /* background-image: linear-gradient(-35deg, ${props => props.color}, #fff); */
        color: ${props => props.color};
        margin: 20px;
        transition: all .5s, backgroundImage 1s
    }
    
    &:hover {
        > p { 
            transform: translateY(0);

            opacity: 1;
        }
        
    }

    @media( min-width: 768px ) {
        >svg{
            height: ${props => `${props.height}px`};
            width: ${props => `${props.width}px`};   
        }
        
    }
    
`