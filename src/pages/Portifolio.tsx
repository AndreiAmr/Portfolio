import React from 'react';

import { FaArrowRight } from "react-icons/fa"

import { Container, ProjectItem } from '../styles/pages/projects';
import PicosMobileMap from '../images/picos-mobile-map.png';
import PicosMobileSplash from '../images/picos-mobile-splash.png';
import PicosWeb from '../images/picos-web.png'

import dataContent from "../data/pages";


const Portifiolio: React.FC = () => {
    return (
        <Container>
            <h1> Projetos de estudos </h1>

            <ProjectItem>
                <img src={PicosWeb} alt="Picos web" />

                <div className="project-name">
                    <h1> {dataContent.pages[1].firstProjectTitle}</h1>
                    <p> {dataContent.pages[1].readAbout} <FaArrowRight /></p>
                </div>
            </ProjectItem>
            
            <ProjectItem>
                <div className="images">
                <img src={PicosMobileSplash} alt="Picos web" />
                <img src={PicosMobileMap} alt="Picos web" />

                </div>

                <div className="project-name">
                    <h1> Picos <span>Web</span></h1>
                    <p> {dataContent.pages[1].secondProjectTitle} <FaArrowRight />  </p>
                </div>
            </ProjectItem>
        </Container>
    );
}

export default Portifiolio;