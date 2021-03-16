import React from 'react';

import { FaArrowRight } from "react-icons/fa"

import { Container, ProjectItem } from '../styles/pages/projects';

import dataContent from "../data/pages";
import { Link } from 'react-router-dom';


const Portifiolio: React.FC = () => {
    return (
        <Container>
            <h1> Projetos de estudos </h1>

            {dataContent.pages[1].projects?.map((project, indiceProject) => {
                return (
                    <ProjectItem key={indiceProject}>
                        
                        {project.images.map((imageName: string, indice: number) => {
                            const Image = require(`../images/${imageName}.png`);
                            
                            return(
                                <img src={Image.default} key={indice} alt="Projeto"/>
                            )
                        })}
                        
                        <div className="project-name">
                            <h1> {project.name} </h1>
                            <Link to={`/ProjectDetail/${indiceProject}`}> Ler sobre <FaArrowRight /></Link>
                        </div>
                    </ProjectItem>
                )
            })}


        </Container>
    );
}

export default Portifiolio;