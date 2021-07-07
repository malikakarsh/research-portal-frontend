import React from "react";
import "./App.css";
import "tailwindcss/tailwind.css";
import NavBar from './NavBar/NavBar';
import SideBar from "./SideBar/SideBar";
import logoSm from './NavBar/assets/nittLogo.png';
import logoLg from './NavBar/assets/nittLogoWide.png'
import SideBarMob from './SideBarMob/SideBarMob';
import { useState } from "react";


const data = [{
	href: '#',
	text: 'Home'
},
{
	href: '#',
	text: 'Research'
},
{
	href: '#',
	text: 'Labs'
},
{
	href: '#',
	text: 'Profs'
}];

const App = ()=> {
	const [state,setState] = useState("none");
	const [mobState,setMobState] = useState("none");
	const [hamburger,setHamburger] = useState("block");

	const closeSideBar = ()=>{
		if (state==="block")
			setState("none");
		if (mobState==="block")
			setState("none");
		setHamburger("block");
		
	}
	const toggleSideBar = () =>{
		setState("block");
		setHamburger("none");
	}

	const toggleSideBarMobile = () =>{
		if (mobState==="none"){
			setMobState("block");
		}
		else{
			setMobState("none");
		}
	}
	
	return (
		<div className="flex">
			<div className="flex-1">
				<NavBar toggleSideBar={toggleSideBar} toggleSideBarMobile={toggleSideBarMobile} hamburger={hamburger}></NavBar>
				<div className="pages">
					<div className="h-screen" style={{overflowY: 'scroll'}}>
						{/* Mobile Side Bar */}
						<div style={{display: mobState}}>
							<SideBarMob></SideBarMob>
						</div>
						<div className="flex items-center justify-center h-screen">
							<div className="bg-gradient-to-r from-blue-400 to-purple-700 text-white text-7xl antialiased  font-semibold rounded-lg border shadow-lg p-10">
								Research Portal
							</div>
						</div>
						<div className="flex items-center justify-center h-screen">
							<div className="bg-gradient-to-r from-blue-400 to-purple-700 text-white text-7xl antialiased  font-semibold rounded-lg border shadow-lg p-10">
								Research Portal
							</div>
						</div>
					</div>
				</div>
			</div>
			<div style={{display:state}}>
				<SideBar closeSideBar={closeSideBar}></SideBar> 
			</div>
		</div>		
	);
}

export default App;
