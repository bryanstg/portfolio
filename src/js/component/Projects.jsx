import React from "react";
import { Project } from "./projects/Project.jsx";
import { Silicoding } from "./projects/Silicoding.jsx";

export const Projects = () => {
	return (
		<div className="projects" id="projects">
			<div className="projects__title">
				<h2>
					PROYECTOS
					<span className="letter-primary">.</span>
				</h2>
			</div>
			<div className="projects__components">
				<Silicoding />
				<Project />
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</div>
	);
};
