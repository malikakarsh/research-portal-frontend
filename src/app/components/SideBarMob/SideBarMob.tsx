import React from 'react';
import './SideBarMob.css';

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
},
{
    href: '#',
    text: 'sample'
},
{
    href: '#',
    text: 'info'
},
{
    href: '#',
    text: 'displaying'
},
{
    href: '#',
    text: 'world'
}];
const SideBarMob = (props:any) => {
    return (
        <div className="w-8/12 bg-gray-300 h-screen border-l-2 border-gray-200 right-0 absolute">
            {data.map((val)=> {
                return (<a href={val.href}>
                    <div className="pt-2 pb-2 text-md pl-4 hover:bg-gray-400 cursor-pointer">
                        <h1>{val.text}</h1>
                    </div>
                </a>)
            })}
        </div>
    )
}

export default SideBarMob;