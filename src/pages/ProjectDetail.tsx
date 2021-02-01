import React from 'react';

import { Container } from '../styles/pages/projectDetail';
import PicosMobile from "../images/picos-web.png";

const ProjectDetail: React.FC = () => {
    return (
        <Container >
            <div className="image-container">
                <img src={PicosMobile} alt="" />
            </div>

            <h1> Picos Web</h1>
            <p> Aplicação web desenvolvida com o intuíto de marcar no mapa os locais que os usuários do " Picos Mobile " indicaram.</p>
            <p> Resolvi desenvolver esta aplicação para estudar sobre api e como uma aplicação web e mobile podem conter as o mesmo conteúdo vindo do banco.</p>

            <h3> * Projeto temporariamente fora do ar *</h3>
            
        </Container>
    );
}

export default ProjectDetail;