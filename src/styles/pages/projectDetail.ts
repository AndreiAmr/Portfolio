import styled from "styled-components";

export const Container = styled.div`
    width: 90%;
    background: #fff;
    border-radius: 20px;
    margin: 20px auto;

    .image-container { 
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        >img {
            width: 80%;
            max-width: 400px;
            margin-top: 20px;
        }        
    }

    > h1 { 
        margin: 25px;
        font-size: 2.2em;
        font-weight: 800;
        color: #21F2FF
        
    }

    > p { 
        font-weight: 600;
        font-size: 1.2em ;
        color: #8FA7B2;
        margin: 30px 50px;
    }

    >h3 {
        text-align: center;
        margin: 40px;
        color: #21C4CE
    }

    @media(min-width: 900px){
        width: 70%;
    }
    
`