import React, { useEffect, useState } from "react";
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
import { useParams } from "react-router";

const CorrectionForm = () => {
    const {id} = useParams<{id: string}>();
    const [user,setUser] = useState("write")
    let state={
      name:'',
      head:'',
      paperLink:'',
      aor:'',
      abstract:'',
      department:''
    }
    const [currentState, setCurrentState] = useState<any>(state)
    function handleChange(e:any) {
      let val = e.target.name;
      if(val==='name'){
        setCurrentState({...currentState, name: e.target.value});
        console.log(currentState);
      }
      else if(val==='head'){
        state.head=e.target.value;
      }
      else if(val==='paperLink'){
        setCurrentState({...currentState, paperLink: e.target.value});
        console.log(currentState);
      }
      else if(val==='aor'){
        setCurrentState({...currentState, aor: e.target.value});
      }
      else if(val==='abstract'){
        setCurrentState({...currentState, abstract: e.target.value});
      }
      else if(val==='id'){
        setCurrentState({...currentState, id: e.target.value});
      }
    }
    useEffect(() => {
      axiosInstance({
        method:'GET',
        url: `/project/id`, 
        params: {
          projectId: id
        }
      }).then((response:any)=>{
        let proj = response.data.data;
        setCurrentState({
          name: proj.name,
          abstract: proj.abstract,
          paperLink: proj.paper_link,
          aor: proj.aor,
          projectId: proj.id
        });
      });
    }, []);
    function handleSubmit(e:any){
      console.log(currentState);
      axiosInstance({
        method:'POST',
        url:'/project/edit',
        data: currentState,
        params: currentState
      }).then((res:any)=>{
        console.log(res);
        window.location.href = '/research';
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
          <Button className="bg-red-800 text-white loginBtn float-right" onClick={handleSubmit}>SUBMIT</Button>
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
          <Label>Google scholars link</Label>
          <TextInput className="inputField" name="heading" type="text"onClick={handleChange}/>
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
          <Button className="bg-red-800 text-white loginBtn float-right" onClick={handleSubmit}>SUBMIT</Button>
        </div>
      </Container>
    </div>:<div className="wrapper h-full">
      <Container padding className="formContainer">
      <div className="header">
      <Text className="text-red-800 text-header">Edit Project</Text></div>
        <div className="fieldInput">
          <Label>Project Name</Label>
          <TextInput className="inputField" name="name" type="text" value={currentState.name} disabled={true} onChange={handleChange}/>
        </div>
        <div className="fieldInput">
          <Label>Google scholars link</Label>
          <TextInput className="inputField" name="paperLink" type="text" value={currentState.paperLink} onChange={handleChange}/>
        </div>
        <div className="fieldInput">
          <Label>Area Of Research</Label>
          <TextInput className="inputField" name="aor" type="text" value={currentState.aor} onChange={handleChange} />
        </div>
        <div className="fieldInput">
          <Label>Description</Label>
          <HelpText>Description of the project (max 10,000 words)</HelpText>
           <textarea name="abstract" className="inputField" style={{borderRadius: '5px'}} disabled={false} value={currentState.abstract} onChange={handleChange}></textarea>
        </div>
        <div className="items-center loginBtnContainer">
          <Button className="bg-red-800 text-white loginBtn float-right" onClick={handleSubmit}>SUBMIT</Button>
        </div>
      </Container>
    </div>))
  );
};

export default CorrectionForm;
