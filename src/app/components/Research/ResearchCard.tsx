import React, { useState, useEffect } from 'react';
import { Select, Field, Label, Row, Col, Card, CardBody, Button, Article, ContentTitle, Text, Aside } from 'tailwind-react-ui'
import './Research.css'
import img from './Assets/icon.jpg';
import { axiosInstance } from "../../utils/axios";
import {Link} from 'react-router-dom';

const ResearchCard = (props:any) => {
    return (
        <Col
        w={{
          def: "full",
          sm: "1/1",
          md: "1/2",
          lg: "1/3",
          xl: "1/4",
        }}
        h="md:h-full"
        padding="10px"
        className="m-30"
      >
        <Card border shadow maxW="sm">
          <img src={img} alt="Example image" />
          <CardBody>
            <Article>
              <ContentTitle size={5}>{props.data.name}</ContentTitle>
              <Text is="p">
                {props.data.abstract}
              </Text>
            </Article>
          </CardBody>
        </Card>
      </Col>
    );
};

export default ResearchCard;