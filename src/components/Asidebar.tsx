import React from 'react';

import { AsideDesktop as Container } from '../styles/components/asidebar';
import PerfilImage from "../images/perfil.jpg"
import { FaDesktop } from 'react-icons/fa';
import { SiBootstrap, SiCss3, SiFigma, SiGithub, SiHtml5, SiJavascript, SiLinux, SiNodeDotJs, SiNpm, SiReact, SiRedux, SiStyledComponents, SiTypescript, SiWindows, SiYarn } from 'react-icons/si';
import Tech from '../components/Tech';

const Asidebar: React.FC = () => {
    return (
        <Container>
            <img src={PerfilImage} alt="Perfil" />
            <h2> Andrei Amaral <FaDesktop /></h2>
            <div className="avaible-to-talk">
                <h4> Disponivel para novos projetos! </h4>
            </div>

            <p> Desenvolvedor frontend com o objetivo de se tornar um desenvolvedor ninja em React.</p>

            <h4> Minhas habilidades:</h4>
            <div className="techs-area">
                <Tech color="#61DAFB" Icon={SiReact} width={40} height={40} title="React"/>
                <Tech color="#3178C6" Icon={SiTypescript} width={40} height={40} title="Typescript"/>
                <Tech color="#764ABC" Icon={SiRedux} width={40} height={40} title="Redux"/>
                <Tech color='#539E43' Icon={SiNodeDotJs} width={40} height={40} title="NodeJs"/>
                <Tech color="#E34F26" Icon={SiHtml5} width={40} height={40} title="HTML"/>
                <Tech color='#dfc81e' Icon={SiJavascript} width={40} height={40} title="JavaScript"/>
                <Tech color="#D373AD" Icon={SiStyledComponents} width={40} height={40} title="Styled Components"/>
                <Tech color='#61DAFB' Icon={SiCss3} width={40} height={40} title="CSS"/>
                <Tech color='#e6442f' Icon={SiNpm} width={40} height={40} title="npm"/>
                <Tech color='#61DAFB' Icon={SiYarn} width={40} height={40} title="Yarn"/>
                <Tech color='#1a1b1b' Icon={SiGithub} width={40} height={40} title="Github"/>
                <Tech color='#841fd6' Icon={SiBootstrap} width={40} height={40} title="Bootstrap"/>
                <Tech color='#e6442f' Icon={SiFigma} width={40} height={40} title="Figma"/>
                <Tech color='#1a1b1b' Icon={SiLinux} width={40} height={40} title="Linux"/>
                <Tech color='#61DAFB' Icon={SiWindows} width={40} height={40} title="Windows"/>
            </div>
        </Container>
    )
}

export default Asidebar;