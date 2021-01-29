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
        </Container>
    )
}

export default Asidebar;