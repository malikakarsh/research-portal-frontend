import React, { ComponentState, useState } from "react";
import { Link } from "react-router-dom";
import {
  Label,
  Button,
  Text,
  Container,
  TextInput,
  HelpText,
  Select
} from "tailwind-react-ui";
import { axiosInstance } from "../../utils/axios";
import './CreateProject.css';

const CreateProject = () => {
    let state={
      name:'',
      head:'',
      paperLink:'',
      aor:'',
      abstract:'',
      department:''
    }
    function handleChange(e:any) {
      let val = e.target.name;
      if(val==='name'){
      state.name=e.target.value;
    }
    else if(val==='head'){
      state.head=e.target.value;
    }
    else if(val==='paperLink'){
      state.paperLink=e.target.value;
    }
    else if(val==='aor'){
      state.aor=e.target.value;
    }
    else if(val==='abstract'){
      state.abstract=e.target.value;
    }
    else state.department=e.target.value;
    console.log(state);
    }
    function handleSubmit(e:any){
      //console.log(state)
      axiosInstance({
        method:'POST',
        url:'/project/create',
        data:state
      }).then((res:any)=>{
        //console.log(res);
        window.location.href='/research';
      }).catch((err:any)=>{
        //console.log(err);
      })
    }
  return (
    <div className="wrapper p-20" style={{"height": "fit-content"}}>
      <Container padding className="formContainer">
      <div className="header">
      <Text className="text-red-800 text-header">Create Project</Text></div>
        <div className="fieldInput">
          <Label>Project Name</Label>
          <TextInput className="inputField" name="name" type="text" onChange={handleChange} />
        </div>
        <div className="fieldInput">
          <Label>Head</Label>
          <TextInput placeholder="Your webmail ID" className="inputField" name="head" type="text" onChange={handleChange} />
        </div>
        <div className="fieldInput">
          <Label>Area Of Research</Label>
          <Select
              onChange={handleChange}
              className="border-2 border-black focus:shadow focus:border-red-800"
              name="aor"
              options={[
                { value: "Machine Learning", label: "Machine Learning" },
                { value: "Robotics", label: "Robotics" },
                { value: "Blockchain", label: "Blockchain" }
              ]}
            />
        </div>
        <div className="fieldInput">
          <Label>Abstract</Label>
          <HelpText>Abstract of the project (max 10,000 words)</HelpText>
           <textarea className="inputField" name="abstract" style={{borderRadius: '5px'}} onChange={handleChange}></textarea>
        </div>
        <div className="fieldInput">
          <Label>Department</Label>
          <Select
              className="border-2 border-black focus:shadow focus:border-red-800"
              name="department"
              options={[
                { value: "CSE", label: "Computer Science" },
                { value: "ME", label: "Mechanical" },
                { value: "ECE", label: "Electrical and Electronics" },
                { value: "ICE", label: "Instrumentation and Control" },
              ]}
              onChange={handleChange}
            />
        </div>
        <div className="fieldInput">
          <Label>Paper Link</Label>
          <TextInput className="inputField" name="paperLink" type="text" onChange={handleChange} />
        </div>
        <div className="items-center loginBtnContainer">
          <Button className="bg-red-800 text-white loginBtn float-right" onClick={handleSubmit}>SUBMIT</Button>
        </div>
      </Container>
    </div>);
};

export default CreateProject;
