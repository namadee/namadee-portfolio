import { Box } from "@mui/material";
import ProjectCard from "../Components/ProjectCard";
import project1Img1 from "../images/project1-logo.png";
import projectImg2 from "../images/ayura-logo.png";
import flutterIcon from "../images/icon-flutter.png";
import NetIcon from "../images/icon-.net.png";
import opentAIIcon from "../images/icon-openai.png";
import phpIcon from "../images/icon-php.png";
import jsIcon from "../images/icon-js.svg";
import htmlIcon from "../images/icon-html.svg";
import cssIcon from "../images/icon-css.svg";
import ayuraImg from "../images/ayura-img.png";
import { useState } from "react";

const Projects = () => {
    const projects = [
        {
            id: 1,
            alt: 'Internarc Project',
            name: 'INTERNARC',
            shortdesc: 'Undergraduate Internship Management System',
            desc: 'The purpose of this project is to support the 3rd year industrial placement program in the University of Colombo School of Computing to function efficiently while improving the transparency, convenience and productivity among all the involved parties.',
            technologies: [phpIcon, jsIcon, cssIcon, htmlIcon],
            image: project1Img1,
            images: [ayuraImg]
        },
        {
            id: 2,
            alt: 'Ayura Project',
            name: 'AYURA',
            shortdesc: 'A Personalized Health Application',
            desc: 'The purpose of this project is to empower Sri Lankans to take control of their health despite cultural and linguistic barriers, while raising awareness and promoting healthier lifestyles to enhance the overall well-being of the population.',
            technologies: [flutterIcon, NetIcon, opentAIIcon],
            image: projectImg2,
            images: [projectImg2] 
        }
    ];

    const [selectedProject, setSelectedProject] = useState(projects[0]); // Default to the first project

    return (
        <Box sx={{ width: '100%', height: '100%', display: { md: 'flex', xs: 'none' },flexDirection:'column', justifyContent: 'center', alignItems: 'center', m: 0, p: 0 }}>
            
            <Box component='img' src={selectedProject.images[0]} maxWidth='30rem' margin='auto'></Box>
           
            <Box sx={{ width: '90%', height: '15rem', display: { md: 'flex', xs: 'none' },alignItems:'center', gap: '1rem' }}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        alt={project.alt}
                        name={project.name}
                        shortdesc={project.shortdesc}
                        desc={project.desc}
                        technologies={project.technologies}
                        onClick={() => setSelectedProject(project)}
                    />
                ))}
            </Box>
        </Box>
    );
};

export default Projects;
