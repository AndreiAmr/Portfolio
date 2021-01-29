import styled from "styled-components";

export const AsideDesktop = styled.div`
    min-height: 100vh;
    width: 25vw;
    margin: 0 auto;
    border-radius: 20px;
    background-color: #fff;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    > img {
        width: 180px;
        height: 180px;
        /* border-radius: 10px; */
        margin: 20px;
    }

    .avaible-to-talk {
        text-align:center;
        font-size: 1.3em;
        width: 100%;
        background-color: #A0FF8C;
        color: #8FA7B2;
        letter-spacing: 1px
    }

    >h2 {
        margin: 20px auto;
        color: #8FA7B2
    }

    > p {
        color: #8FA7B2;
        margin: 30px 15px;
        font-size: 1.3em
    }

    > h4 {
        width: 100%;
        color: #8FA7B2;
        padding-left: 15px;
        font-size: 1.5em;
    } 

    .techs-area { 
        display: flex;
        flex-wrap: wrap;
        margin: 20px;
        justify-content: center;
        align-items: center;
        > svg {
            width: 30px;
            height: 30px;
            margin: 10px;
            padding: 5px;
            background-color: #efefef;
            border-radius: 5px;
            font-size: 20px;

            &:hover {

            }
        }
    }

    @media(max-width: 899px){
        display: none
    }
`