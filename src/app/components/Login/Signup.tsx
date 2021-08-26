import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  Field,
  Label,
  Row,
  Col,
  Card,
  CardBody,
  Button,
  Article,
  ContentTitle,
  Text,
  Aside,
  Container,
  TextInput,
  HelpText,
} from "tailwind-react-ui";
import "./Login.css";

const Signup = () => {
  return (
    <div className="wrapper h-full">
      <Container padding className="signupContainer">
      <div className="header">
      <Text className="text-red-800 text-header">SIGN UP</Text></div>
        <Field hasHelp>
          <Label>Webmail</Label>
          <HelpText>Your webmail id(Eg: 123@nitt.edu)</HelpText>
          <TextInput className="inputField" name="webmail" type="email" />
        </Field>
        <Field hasHelp>
          <Label>Password</Label>
          <HelpText>
            Your password must be 8-20 characters long, contain letters and
            numbers, and must not contain spaces, special characters, or emoji.
          </HelpText>
          <TextInput className="inputField" name="password" type="password" />
        </Field>
        <Field>
          <Label>Name</Label>
          <TextInput className="inputField" name="name" type="text" />
        </Field>
        <Field>
          <Label>Profile Image</Label>
          <input type="file" id="file" />
          <label htmlFor="file" className="fileUpload">
            <span>select</span>
          </label>
        </Field>
        <div className="items-center loginBtnContainer">
        <div className="text-red-800 infoText">Already have an account? <Link to="/login">Login!</Link></div>
          <Button className="bg-red-800 text-white loginBtn float-right">Register</Button>
        </div>
      </Container>
    </div>
  );
};

export default Signup;
