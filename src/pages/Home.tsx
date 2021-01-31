import React from 'react';
import { SiReact, SiRedux, SiTypescript, SiStyledComponents, SiJavascript, SiHtml5, SiCss3, SiNodeDotJs, SiNpm, SiYarn, SiGithub, SiBootstrap, SiFigma, SiWindows, SiLinux } from "react-icons/si";

import { AboutMeContainer, Container, MySkillsContainer, PerfilContainer, StudyJorney } from '../styles/pages/home';
import Perfil from "../images/perfil.jpg";
import Tech from "../components/Tech";

import Lottie from 'react-lottie';
import SpaceAnimation from '../images/space-animation.json';
import LaptopStudying from '../images/laptop-studying.json';

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
                    Sobre mim
                </h1>

                <p> Meu nome é <b> Andrei Jesus do Amaral</b>, tenho 19 anos, resido atualmente na região do Grajaú, na grande cidade <b> São Paulo </b>.</p>

                <p> Sou desenvolvedor, não por formação mas por vocação. </p>
                <p> Desde pequeno sempre amei o mundo da tecnologia e ficava me pergutando "como as pessoas fazem site e aplicativos ?" </p>
                <p> Aos meus 14 anos, meu irmão me auxíliou a começar meus estudos em desenvolvimento de interfaces, e desde então meu amor por tecnologia não para de crescer. </p>

                <h1> Sou amante de: </h1>

                <div className="text-with-animation-aside">

                    <ul>
                        <li>Tecnologia </li>
                        <li>Astronomia</li>
                        <li>Animais</li>
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
                    Jornada de estudos
                </h1>

                <p> Comecei meus estudos com desenvolvimento de interfaces com HTML, CSS e JavaScript.</p>
                <p> Sempre achei um máximo estudar essas tecnologias e ir vendo os elementos surgirem na tela.</p>
                <p> Há dois anos, ouvi falar sobre o ReactJS e quando vi que era possível juntar as minhas 3 tecnologias favoritas em 'uma só' nunca mais larguei do React hahaha.</p>

                <p> Depois de um tempo estudando React, senti que precisava ter uma certa noção de backend, para que minhas aplicações web começassem a ter mais interações com os usuários. </p>

                <h1> Principais techs </h1>

                <div className="main-techs">
                    <ul>
                        <li>Javascript</li>
                        <li>Typescript</li>
                        <li>React</li>
                        <li>React Native</li>
                        <li>Redux</li>
                    </ul>

                    <Lottie options={{
                        animationData: LaptopStudying,
                        autoplay: true,
                        loop: true
                    }} />
                </div>



                <p> Com um tempo de estudos e uma certa ajuda do meu irmão, consegui entender como funciona o Node e desenvolvi uma aplicação para realizar um CRUD. (NodeJS, Express, MongoDB ou Firebase). </p>

                <p> Hoje são 5 anos de estudos e depois de muitas pedras no caminho, finalmente me sinto apto para entrar no mercado de trabalho. </p>

            </StudyJorney>

            <div className="divisor"></div>

            <MySkillsContainer>
                <h1>
                    Minhas habilidades
                </h1>
                <p> A baixo está a lista de tecnologias em que tenho focado nos ultimos dois anos de estudos. </p>

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