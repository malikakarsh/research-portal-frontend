import React, { useState, useEffect } from 'react';
import { Select, Field, Label, Row, Col, Card, CardBody, Button, Article, ContentTitle, Text, Aside } from 'tailwind-react-ui'
import './Research.css'
import img from './Assets/icon.jpg';
import { axiosInstance } from "../../utils/axios";
import {Link} from 'react-router-dom';
import ResearchCard from "./ResearchCard";

const Research = () => {
  const [user,setUser] = useState("admin");
  const [researches,setResearches] = useState([{name:"",description:""}]);
  
  useEffect(() => {
    let url = `/projects`;
    axiosInstance
      .get(url)
      .then((res: any) => {
        setResearches(res.data.data);
        console.log(res.data.data);
      })
      .catch((err: Error) => console.log(err));
  }, []);

  const getResearches = ()=>{
    return researches.map((item, key) => {
      return (
        <ResearchCard data={item} key={key}/>
      );
    })
  };

  return(
    <div className="wrapper">
      <div className="flex justify-start">
        <Link to='/my-research' className="m-3"><Button className="w-40 bg-red-800 text-white">My Research</Button></Link>
        <Link to='/create-project' className="m-3"><Button className="w-60 bg-red-800 text-white">Create Project</Button></Link>
      </div>
      <div className="flex-1">
        <div className="grid justify-items-end m-3">
        <div className="searchHolder relative flex w-200 mb-3"> <input type="text" className="searchInput h-10 border-2 border-black pr-8 pl-5 rounded z-0 focus:shadow focus:border-red-800" placeholder="Search"/>
              <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
          </div>
        </div>
      </div>
      <div className="main-container mb-10">
        <Aside>
          <Label className="filterLabel">Filter By department</Label>
          <Field>
            <Select
              className="border-2 border-black focus:shadow focus:border-red-800"
              name="select"
              options={[
                { value: "cse", label: "Computer Science" },
                { value: "mech", label: "Mechanical" },
                { value: "ece", label: "Electrical and Electronics" },
                { value: "ice", label: "Instrumentation and Control" },
              ]}
            />
          </Field>
          <Button className="w-40 bg-red-800 text-white">Apply</Button>
        </Aside>
        <div className="results container-1 m-3 flex flex-auto justify-center">
          <Row gutter className="md:h-full">
            {researches.length?getResearches():null}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Research;
