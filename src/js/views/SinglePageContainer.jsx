import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { About } from "../component/About.jsx";
import { Home } from "../component/Home.jsx";
import { Skills } from "../component/Skills.jsx";

export const SinglePageContainer = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="main-container">
			<Home />
			<About />
			<Skills />
		</div>
	);
};
