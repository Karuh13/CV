import "./App.scss";
import "./reset.css"
import { CV } from "./CV/CV"
import { Context } from "./shared/contexts/Context";
import { useState } from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {

	return (
		<div className="App">
			<Navbar />
			<Hero />
			<Education />
			<Experience />
			<Skills />
			<Contact />
		</div>
	);
}

export default App;
