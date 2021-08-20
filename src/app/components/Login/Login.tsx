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
  Header,
  NavBrand,
  Box
} from "tailwind-react-ui";
import "./Login.css";

const Login = () => {
  let user="admin";
  return <div className="wrapper center h-full">
    <Container padding className="loginContainer">
      <div className="header">
      <Text className="text-red-800 text-header">LOGIN</Text></div>
        <Field>
          <Label>Webmail</Label>
          <TextInput className="inputField" name="webmail" type="email" />
        </Field>
        <Field className = "align-content-center">
          <Label>Password</Label>
          <TextInput className="inputField" name="password" type="password" />
        </Field>
        <div className="items-center loginBtnContainer">
        <div className="text-red-800 infoText">Don't have an account? <Link to="/signup">Register!</Link></div>
        <Button className="bg-red-800 text-white loginBtn float-right">Login</Button>
        </div>
      </Container>
  </div>;
};

export default Login;
