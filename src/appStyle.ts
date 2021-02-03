import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin:0;
        box-sizing: border-box;
        font-family: "Nunito"
    }

    html, body, #root {
        width: 100%;
        background-color: #efefef;
    }

`

export const Container = styled.div`
    width: 100%;
`


export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-around;

    @media(min-width: 900px) {
        transform: translateY(-50px)
    }
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    background: #fff;

    > .header-area { 
        height: 55px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;  
        padding: 0;
        > h1 {
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
            overflow: hidden;

            .menu-bar { 
                height: 3px;
                width: 27px;
                margin: 5px auto;
                background-color: #000;
                border-radius: 15px;
                transition: all .4s;

                &:nth-child(2){
                    margin-left: 10px;
                }
            }

            &.open {
                
                .menu-bar:nth-child(1){
                    background-color: #b1b1b1;
                    width: 20px;
                    transform: translate(0px, 10px) rotate(47deg)
                }
                .menu-bar:nth-child(2){
                    transform: translate(100px, -10px);
                    opacity: 0;
                }
                .menu-bar:nth-child(3){
                    background-color: #34F4F4;
                    transform: translate(0px, -8px) rotate(-47deg)
                    
                }
            }
            
            
            
            
        }

        
        .header-options {
            display: none;
        }

        @media(min-width: 900px) {
            .menu-area {
                display: none;
            }

            .header-options {
                display: block;
                display: flex;
                 
                > a { 
                    text-decoration: none;
                    margin: 0 10px;
                    color: #8FA7B2;
                    overflow: hidden;
                    -webkit-tap-highlight-color: rgba(0,0,0,0);

                    &:after {
                            content: "";
                            position: absolute;
                            bottom: -0px;
                            width: 80%;
                            height: 3px;
                            background: #21F2FF;
                            left: -100%;

                            transition: all .5s;
                        }
                    

                    &.active { 
                        color: #21F2FF;
                        position: relative; 

                        &:after {
                            content: "";
                            position: absolute;
                            bottom: -0px;
                            width: 80%;
                            height: 3px;
                            background: #21F2FF;
                            left: 0;
                        }
                    }
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
            font-size: 20px;
            color: #ffffff79;
            margin: 5px 10px;
        }

        > h1 {
            font-size: 23px;
            color: #fff;
            margin: 0 10px;
            text-align: left;
        }
        
        &:after {
            position: absolute;
            content: '';
            /* width: 100%; */
            background-color: #ffffff49;
            height: 50px;
            bottom: -20px;
            right: 0;
            left: 0;
            transform: rotate(-3deg);
            
            @media(min-width: 900px) {
                height: 100px;
                bottom: -40px;
                right: -10px;
                left: -10px;
                transform: rotate(-2deg);
            }
            
        }
    }

    
    @media(min-width:768px){
        > .header-area {
            > h1 {
                font-size: 1.6em
            }
        }

        > .page-title-container {
            padding-left: 20px;

            height: 180px;
            
            h3 {
                font-size: 1.5em;
                margin-top: 20px;
            }
            
            h1{ 
                font-size: 2em;
            }
        }
    }   
`




export const MobileOptionsArea = styled.div`
    width: 100%;
    height: 0px;

    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: all .3s;

    > a { 
        margin: 0 10px;
        text-decoration: none;
        color: #8FA7B2;
        overflow: hidden;
        
        &:after {
            content: "";
            position: absolute;
            bottom: -0px;
            width: 80%;
            height: 3px;
            background: #21F2FF;
            left: -100%;
            transition: all .5s;
        }
                    

        &.active { 
            color: #21F2FF;
            position: relative; 

                &:after {
                    content: "";
                    position: absolute;
                    bottom: -0px;
                    width: 80%;
                    height: 3px;
                    background: #21F2FF;
                    left: 0;
                }
        }
        
    }

    &.open {
        height: 50px;

    }

`