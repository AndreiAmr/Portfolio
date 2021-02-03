import styled from "styled-components";

export const Container = styled.div`
    width: 95%;
    margin: 20px auto;
    border-radius: 20px;
    background-color: #fff;
    padding: 30px 10px;

    .divisor { 
        width: 90%;
        margin: 20px auto;
        height: 1px;
        background-color: #22CDD8
    }

    @media(min-width: 900px){
        width: 70vw;
        margin: 0 auto;
    }
`


export const PerfilContainer = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-around;
    overflow: hidden;
    padding: 10px;
    
    > .name-area {

        > h3 {
            margin-top: 20px;
            font-size: 1em;
            text-align: center;
            color: #8FA7B2 ;
            > span {
                color: #52E1F4;
                font-size: 1.9em;
            }
            
            > b { 
                font-size: 1.1em;
                color: #52E1F4;
            }
        }

       > p { 
            font-weight: 700;
            margin: 20px auto;
            font-size: 1em;
            text-align: center;
            color: #8FA7B2;
            border-bottom: 1px solid #22CDD8;
        }
        
    }
        
   > .image-area {
        margin: 10px;
        padding: 10px;
        background-color: #52E1F470;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        > img {
            margin: 0px;
            height: 120px;
            width: 120px;
            border-radius: 10px;
        }
    }

    @media(min-width: 768px){
        > .image-area {
            >img { 
                height: 200px;
                width: 200px;
            }
        }

        >.name-area {
            > h3 {
                font-size: 2em
            }
        }
    } 

    @media(min-width: 900px){
        display: none;
    }
    
    
`

export const AboutMeContainer = styled.div`

    >h1 { 
        color: #21C4CE;
        margin: 20px;
    }

    >p, .text-with-animation-aside > p {
        font-size: 15px;
        color: #8FA7B2;
        width: 90%;
        margin: 15px 0;
        margin-left: 30px;
        padding-right: 10px;
        clear: both;
    }

    .text-with-animation-aside {
        display: flex;
        justify-content: center;
        align-items: center;

        >p {
            margin: 0 10px;
            font-size: 16px;
        }

        > div {
            max-width: 300px;
            max-height: 300px;
            > svg {
                margin-right: 10px;
            }
        }

        > ul {
            list-style: none;
            margin-left: 20px;
            
            > li {
                position: relative;
                font-weight: 700;
                color:#8FA7B2;
                margin: 10px;

                &:after {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 25%;
                    bottom: -4px;
                    height: 3px;
                    background-color: #21C4CE;
                }
                
            }
        }
    }

    @media(min-width: 768px){
        >h1 {
            font-size: 2em;
            margin-left: 30px
        }

        > p{
            font-size: 1.2em;
            margin-left: 37px;
            margin-right: 10px
        }
        
    }

    @media(min-width: 900px) {
        > .text-with-animation-aside {
            width: 60%;
            margin: 0 auto;

            >ul { 
                font-size: 1.5em
            }
        }
    }

`

export const StudyJorney = styled.div`

    >h1 { 
        font-size: 24px;
        color: #21C4CE;
        margin: 20px;
    }

    >p {
        font-size: 15px;
        color: #8FA7B2;
        width: 90%;
        margin: 15px 0;
        margin-left: 30px;
    }


    .main-techs {
        display: flex;
        /* justify-content: center; */
        align-items: center;


        >p {
            margin: 0 10px;
            font-size: 16px;
        }

        > div {
            max-width: 300px;
            max-height: 300px;
            margin: 0;

            > svg {
                margin-right: 10px;
            }
        }

        > ul {
            list-style: none;
            margin-left: 20px;
            
            > li {
                position: relative;
                font-weight: 700;
                color:#8FA7B2;
                margin: 10px;

                
                &:after {
                    content: "";
                    position: absolute;
                    left: 0;
                    right: 15%;
                    bottom: -4px;
                    height: 3px;
                    background-color:  #21C4CE;


                }
                
            }
        }
    }
    
    @media(min-width: 768px){
        >h1 {
            font-size: 2em;
            margin-left: 30px
        }

        > p{
            font-size: 1.2em;
            margin-left: 37px;
            margin-right: 10px
        }
    }

    @media(min-width: 900px){
        .main-techs { 
            width: 60%;
            margin: 0 auto;

            > div {
                
                max-height: 600px;
                max-width: 600px;
                >svg {
                    height: 600px;
                    width: 600px;    
                }
            }

            > ul {
                display:flex;
                max-width: 400px;
                flex-wrap: wrap;
                margin-right: 20px;
                margin-left: 0;

                > li { 
                    font-size: 1.5em;
                    padding: 10px 0 
                }
            }
            
        }
    }

`

export const MySkillsContainer = styled.div`

    >h1 { 
        font-size: 24px;
        color: #21C4CE;
        margin: 20px;
    }

    >p {
        font-size: 15px;
        color: #8FA7B2;
        width: 90%;
        margin: 15px 0;
        margin-left: 30px;
    }

    >.techs-area{ 
        width: 75%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;

    }

    
    @media(min-width: 768px){
        >h1 {
            font-size: 2em;
            margin-left: 30px
        }

        > p{
            font-size: 1.2em;
            margin-left: 37px;
            margin-right: 10px
        }
        
    }

    @media(min-width: 900px){
        display:none;
    }

`