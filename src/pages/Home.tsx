import React from 'react';
import { SiReact, SiRedux, SiTypescript, SiStyledComponents, SiJavascript, SiHtml5, SiCss3, SiNodeDotJs, SiNpm, SiYarn, SiGithub, SiBootstrap, SiFigma, SiWindows, SiLinux } from "react-icons/si";

import { AboutMeContainer, Container, MySkillsContainer, PerfilContainer, StudyJorney } from '../styles/pages/home';
import Perfil from "../images/perfil.jpg";
import Tech from "../components/Tech";

import Lottie from 'react-lottie';
import SpaceAnimation from '../images/space-animation.json';
import LaptopStudying from '../images/laptop-studying.json';

import dataContent from "../data/pages" ;

const Home: React.FC = () => {

    return (
        <Container>
            <PerfilContainer>
                <div className='name-area'>
                    <h3>
                        <span> Oi!</span> <br />
                        Eu sou o <b>Andrei!</b>
                    </h3>
                    <p> Prazer em conhece-lo!</p>
                </div>

                <div className="image-area">
                    <img src={Perfil} alt="Perfil" />
                </div>
            </PerfilContainer>

            <AboutMeContainer>
                <h1>
                    {dataContent.pages[0].aboutMeTitle}
                </h1>

                {dataContent.pages[0].aboutMeParagraphs?.map((text: string, indice: number) => <p key={indice}>{text}</p>) }

                <h1> Sou amante de: </h1>

                <div className="text-with-animation-aside">

                    <ul>
                        {dataContent.pages[0].ImLoverOf?.map((text: string, indice: number) => <li key={indice}> {text} </li>)}
                    </ul>

                    <Lottie options={{
                        animationData: SpaceAnimation,
                        autoplay: true,
                        loop: true
                    }} />
                </div>

            </AboutMeContainer>
            <div className="divisor"></div>


            <StudyJorney>
                <h1>
                    {dataContent.pages[0].studiesJourney?.title}
                </h1>

                {dataContent.pages[0].studiesJourney?.paragraphs.map((text: string, indice: number) => <p key={indice}> {text} </p>)}

                <h1> Principais techs </h1>

                <div className="main-techs">
                    <ul>
                        {dataContent.pages[0].mainTechs?.techs.map(( text: string, indice: number ) => <li key={indice}> {text} </li>)}

                    </ul>

                    <Lottie options={{
                        animationData: LaptopStudying,
                        autoplay: true,
                        loop: true
                    }} />
                </div>


                {dataContent.pages[0].mainTechs?.paragraphs.map(( text: string, indice: number) => <p key={indice}> {text} </p>)}


            </StudyJorney>

            <div className="divisor"></div>

            <MySkillsContainer>
                <h1>
                    {dataContent.pages[0].mySkills?.title}
                </h1>
                {dataContent.pages[0].mySkills?.paragraphs.map((text: string, indice: number) => <p key={indice}> {text} </p> )}

                <div className="techs-area">
                    <Tech color="#61DAFB" Icon={SiReact} width={40} height={40} />
                    <Tech color="#3178C6" Icon={SiTypescript} width={40} height={40} />
                    <Tech color="#764ABC" Icon={SiRedux} width={40} height={40} />
                    <Tech color='#539E43' Icon={SiNodeDotJs} width={40} height={40} />
                    <Tech color="#E34F26" Icon={SiHtml5} width={40} height={40} />
                    <Tech color='#F7DF1E' Icon={SiJavascript} width={40} height={40} />
                    <Tech color="#D373AD" Icon={SiStyledComponents} width={40} height={40} />
                    <Tech color='#61DAFB' Icon={SiCss3} width={40} height={40} />
                    <Tech color='#61DAFB' Icon={SiNpm} width={40} height={40} />
                    <Tech color='#61DAFB' Icon={SiYarn} width={40} height={40} />
                    <Tech color='#61DAFB' Icon={SiGithub} width={40} height={40} />
                    <Tech color='#61DAFB' Icon={SiBootstrap} width={40} height={40} />
                    <Tech color='#61DAFB' Icon={SiFigma} width={40} height={40} />
                    <Tech color='#61DAFB' Icon={SiLinux} width={40} height={40} />
                    <Tech color='#61DAFB' Icon={SiWindows} width={40} height={40} />
                </div>

            </MySkillsContainer>


        </Container>
    );
}

export default Home;