import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Label,
  Button,
  Text,
  Container,
  TextInput,
  HelpText,
} from "tailwind-react-ui";
import { axiosInstance } from "../../utils/axios";
import './CorrectionForm.css';

const CorrectionForm = () => {
    const [user,setUser] = useState("write")
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
      console.log(state)
      axiosInstance({
        method:'POST',
        url:'/project/create',
        data:state
      }).then((res:any)=>{
        console.log(res);
      }).catch((err:any)=>{
        console.log(err);
      })
    }
  return (
    (user==="admin"?
    <div className="wrapper h-full">
      <Container padding className="formContainer">
      <div className="header">
      <Text className="text-red-800 text-header">Edit Project</Text></div>
        <div className="fieldInput">
          <Label>Project Name</Label>
          <TextInput className="inputField" name="projectName" type="text" onClick={handleChange}/>
        </div>
        <div className="fieldInput">
          <Label>Heading</Label>
          <TextInput className="inputField" name="heading" type="text" onClick={handleChange}/>
        </div>
        <div className="fieldInput">
          <Label>Area Of Research</Label>
          <TextInput className="inputField" name="name" type="text" onClick={handleChange}/>
        </div>
        <div className="fieldInput">
          <Label>Description</Label>
          <HelpText>Description of the project (max 10,000 words)</HelpText>
           <textarea className="inputField" style={{borderRadius: '5px'}} onClick={handleChange}></textarea>
        </div>
        <div className="items-center loginBtnContainer">
          <Button className="bg-red-800 text-white loginBtn float-right">SUBMIT</Button>
        </div>
      </Container>
    </div>:(user==='edit'?<div className="wrapper h-full">
      <Container padding className="formContainer">
      <div className="header">
      <Text className="text-red-800 text-header">Edit Project</Text></div>
        <div className="fieldInput">
          <Label>Project Name</Label>
          <TextInput className="inputField" name="projectName" type="text" disabled={true} onClick={handleChange}/>
        </div>
        <div className="fieldInput">
          <Label>Heading</Label>
          <TextInput className="inputField" name="heading" type="text" onClick={handleChange}/>
        </div>
        <div className="fieldInput">
          <Label>Area Of Research</Label>
          <TextInput className="inputField" name="name" type="text" onClick={handleChange}/>
        </div>
        <div className="fieldInput">
          <Label>Description</Label>
          <HelpText>Description of the project (max 10,000 words)</HelpText>
           <textarea className="inputField" style={{borderRadius: '5px'}} onClick={handleChange}></textarea>
        </div>
        <div className="items-center loginBtnContainer">
          <Button className="bg-red-800 text-white loginBtn float-right">SUBMIT</Button>
        </div>
      </Container>
    </div>:<div className="wrapper h-full">
      <Container padding className="formContainer">
      <div className="header">
      <Text className="text-red-800 text-header">Edit Project</Text></div>
        <div className="fieldInput">
          <Label>Project Name</Label>
          <TextInput className="inputField" name="projectName" type="text" disabled={true} onClick={handleChange}/>
        </div>
        <div className="fieldInput">
          <Label>Heading</Label>
          <TextInput className="inputField" name="heading" type="text" onClick={handleChange} />
        </div>
        <div className="fieldInput">
          <Label>Area Of Research</Label>
          <TextInput className="inputField" name="name" type="text" onClick={handleChange} />
        </div>
        <div className="fieldInput">
          <Label>Description</Label>
          <HelpText>Description of the project (max 10,000 words)</HelpText>
           <textarea className="inputField" style={{borderRadius: '5px'}} disabled={true} onClick={handleChange}></textarea>
        </div>
        <div className="items-center loginBtnContainer">
          <Button className="bg-red-800 text-white loginBtn float-right">SUBMIT</Button>
        </div>
      </Container>
    </div>))
  );
};

export default CorrectionForm;