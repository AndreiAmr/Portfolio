import React from 'react';

import { Container } from '../styles/pages/projectDetail';
import dataContent from "../data/pages"

const ProjectDetail: React.FC = (props: any) => {
    const { index }= props.match.params;
    const portifolioPageObject = dataContent.pages[1] as any ;
    const projectObject = portifolioPageObject.projects[index];
 

    return (
        <Container >
            <div className="image-container">
                {
                    projectObject.images.map( (e: any, indice: number) => {
                        const imageObject = require(`../images/${e}.png`)
                        return (
                            <img src={imageObject.default} key={indice} alt='Sobre o local'/>
                        )
                    })
                }
            </div>

            <h1> { projectObject.name }</h1>
            {projectObject.paragraphs.map( (text: string, indice: number) => {
                return (
                    <p key={indice}> {text}</p>
                )
            })}


        </Container>
    );
}

export default ProjectDetail;