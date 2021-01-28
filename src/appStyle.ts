import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin:0;
        box-sizing: border-box;
    }

`

export const Container = styled.div`
    width: 100%;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;

    > .header-area { 
        height: 55px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;  
        padding: 0;
        > h1 {
            font-family: 'Nunito';
            font-size: 16px;
            margin: 0;

            > b {
                color: #34F4F4;
            }
        }

        > .menu-area {
            height: 30px;
            width: 40px;
            border-radius: 10px;
            background-color: #C4C4C429;

            .menu-bar { 
                height: 3px;
                width: 27px;
                margin: 5px auto;
                background-color: #000;
                border-radius: 15px;

                &:nth-child(2){
                    margin-left: 10px;
                }
            }
            
        }
    }

    > .page-title-container{
        position: relative;
        height: 130px;
        width: 100%;
        background-image: linear-gradient(to right, #22CDD8, #21F2FF);
        overflow: hidden;

        > h3 {
            font-family: "Nunito";
            font-size: 20px;
            color: #ffffff79;
            margin: 5px 10px;
        }

        > h1 {
            font-family: "Nunito";
            font-size: 23px;
            color: #fff;
            margin: 0 10px;
            text-align: left;
        }
        
        &:after {
            position: absolute;
            content: '';
            width: 100%;
            height: 50px;
            background-color: #ffffff49;
            bottom: -20px;
            right: 0;
            left: 0;
            transform: rotate(-3deg);
        }
    }

    
`