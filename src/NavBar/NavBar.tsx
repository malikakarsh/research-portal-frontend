import React,{useEffect} from 'react';
import './NavBar.css';
import logoSm from './assets/nittLogo.png';
import logoLg from './assets/nittLogoWide.png'
import SideBar from '../SideBar/SideBar';


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
const  NavBar = (props:any) => {
	const {toggleSideBar,toggleSideBarMobile,hamburger} = props;
	// const toggleScroll = props.toggleSideBar;
    return (
			<nav className="bg-red-800 flex-1" style={{overflow: 'hidden',boxShadow: '0 0px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'}}>
				<div className="container max-w-7xl sm:px-8 mx-auto pb-4 px-2">
					<div className="hidden sm:flex sm:justify-between">
						<img src={logoLg} className="sm:h-16 md:h-24"/>
						<button type="button" onClick={toggleSideBar} style={{display:hamburger}}>
							<svg className="block h-9 w-9  rounded-md hover:bg-red-900 px-1 text-gray-100 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>

					<div className="flex justify-around sm:hidden">
						<img src={logoSm} className="h-24"/>
						<button type="button" onClick={toggleSideBarMobile}>
							<svg className="block h-9 w-9  rounded-md hover:bg-red-900 px-1 text-gray-100 hover:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						</button>
					</div>
					<div className="hidden sm:block" >
						<div className="flex justify-end">
							{data.map((val)=> {
								return (<a href={val.href} className="text-gray-300 ml-10 px-3 py-1 rounded-md text-md hover:text-white hover:bg-red-900 font-medium">{val.text}</a>);
							})}
						</div>
					</div>
				</div>
			</nav>
    );
}

export default NavBar;