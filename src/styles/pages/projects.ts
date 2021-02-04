import styled from "styled-components";


export const Container = styled.div`
    width:95%;
    background: #fff;
    border-radius: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
    min-height: 60vh;
    padding: 10px;

    >h1 { 
        color: #22CDD8;
        margin: 30px;
        margin-left: 15px
    }

    @media(min-width: 900px){
        margin-top: 0;
        width: 70vw;
        margin: 0 auto 20px
    }
    
`

export const ProjectItem = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    background-image: linear-gradient(65deg, #21F2FF80, #fff);
    margin: 20px 10px;
    border-radius: 10px;
    max-width: 370px;
    margin: 20px auto;
    border: 1px solid #21F2FF;
    /* box-shadow: 4px 1px 4px #21F2FF70;  */
    

    >img {
        margin: 5px
        
    }    

    > .images {
        > img {
            margin: 5px;
        }
    }

    > .project-name {
        flex-grow: 1;
        > h1 {
            
            font-size: 20px;
            text-align: center;
            color: #21C4CE
        }

        > p {
            font-size: 15px;
            text-align: center;
            color: #22CDD8;
            display: flex;
            align-items: center;
            justify-content: center;

            > svg {
                margin-left: 10px;
                animation: animateArrowRight 1.5s infinite; 
            }

            @keyframes animateArrowRight {
                0% {
                    transform: translateX(0)
                }
                25% {
                    transform: translateX(5px)
                }
                50% {
                    transform: translateX(0)
                }
                75% {
                    transform: translateX(5px)
                }
                100% {
                    transform: translateX(0)
                }
            }
        }
    }

    @media(min-width: 900px) {
        max-width: 500px;
        margin: 20px 60px;
        .project-name {
            >h1 { 
                font-size: 1.5em
            }
        }
        
        &:nth-child(2) {
            margin-top: 100px;
            /* margin-left: calc(50vw - 250px) */
        }
        &:nth-child(3) {
            margin-left: 15%
        }
    }
    
`