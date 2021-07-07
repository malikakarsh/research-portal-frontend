import React from 'react';
import './SideBar.css';

// interface ISideBarProps {
//       myFunc(): void;
// }

const data = [{
    text: 'sample'
},
{
    text: 'info'
},
{
    text: 'displaying'
},
{
    text: 'world'
}]
const SideBar = (props:any) => {
    const {closeSideBar} = props;
    return (
        <div className="w-64 bg-gray-300 h-screen border-l-2 border-gray-200">
            <div className="w-64 bg-gray-600 h-20 text-left p-6">
                <button onClick={closeSideBar}><h1 className="text-white hover:text-black text-xl"><i className="fas fa-arrow-right"></i></h1></button>
            </div>
            <div className="w-64 text-left pt-3">
                {data.map((val)=>{
                    return (<div className="pt-2 pb-2 text-md pl-4 hover:bg-gray-400 cursor-pointer">
                                <h1>{val.text}</h1>
                            </div>)
                })}
            </div>
        </div>    
        );
}

export default SideBar;