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
import './CorrectionForm.css';

const CorrectionForm = () => {
    const [user,setUser] = useState("edit")
  return (
    (user==="admin"?
    <div className="wrapper h-full">
      <Container padding className="formContainer">
      <div className="header">
      <Text className="text-red-800 text-header">Edit Project</Text></div>
        <div className="fieldInput">
          <Label>Project Name</Label>
          <TextInput className="inputField" name="projectName" type="text" />
        </div>
        <div className="fieldInput">
          <Label>Heading</Label>
          <TextInput className="inputField" name="heading" type="text" />
        </div>
        <div className="fieldInput">
          <Label>Area Of Research</Label>
          <TextInput className="inputField" name="name" type="text" />
        </div>
        <div className="fieldInput">
          <Label>Description</Label>
          <HelpText>Description of the project (max 10,000 words)</HelpText>
           <textarea className="inputField" style={{borderRadius: '5px'}}></textarea>
        </div>
        <div className="fieldInput">
          <Label>Profile Image</Label>
          <input type="file" id="file" />
          <label htmlFor="file" className="fileUpload">
            <span>select</span>
          </label>
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
          <TextInput className="inputField" name="projectName" type="text" disabled={true}/>
        </div>
        <div className="fieldInput">
          <Label>Heading</Label>
          <TextInput className="inputField" name="heading" type="text" />
        </div>
        <div className="fieldInput">
          <Label>Area Of Research</Label>
          <TextInput className="inputField" name="name" type="text" />
        </div>
        <div className="fieldInput">
          <Label>Description</Label>
          <HelpText>Description of the project (max 10,000 words)</HelpText>
           <textarea className="inputField" style={{borderRadius: '5px'}}></textarea>
        </div>
        <div className="fieldInput">
          <Label>Profile Image</Label>
          <input type="file" id="file" />
          <label htmlFor="file" className="fileUpload">
            <span>select</span>
          </label>
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
          <TextInput className="inputField" name="projectName" type="text" disabled={true}/>
        </div>
        <div className="fieldInput">
          <Label>Heading</Label>
          <TextInput className="inputField" name="heading" type="text" />
        </div>
        <div className="fieldInput">
          <Label>Area Of Research</Label>
          <TextInput className="inputField" name="name" type="text" />
        </div>
        <div className="fieldInput">
          <Label>Description</Label>
          <HelpText>Description of the project (max 10,000 words)</HelpText>
           <textarea className="inputField" style={{borderRadius: '5px'}} disabled={true}></textarea>
        </div>
        <div className="fieldInput">
          <Label>Profile Image</Label>
          <input type="file" id="file" />
          <label htmlFor="file" className="fileUpload">
            <span>select</span>
          </label>
        </div>
        <div className="items-center loginBtnContainer">
          <Button className="bg-red-800 text-white loginBtn float-right">SUBMIT</Button>
        </div>
      </Container>
    </div>))
  );
};

export default CorrectionForm;