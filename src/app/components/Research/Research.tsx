import React, { useState } from 'react';
import { Select, Field, Label, Row, Col, Card, CardBody, Button, Article, ContentTitle, Text, Aside } from 'tailwind-react-ui'
import './Research.css'
import img from './Assets/icon.jpg';
import {Link} from 'react-router-dom';

const Research = () => {
  let researches = [
    {
      name: "Research Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Research Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Research Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Research Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Research Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Research Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Research Title",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];
  const [user,setUser] = useState("admin");
  return(
    <div className="wrapper">
      <div className="flex justify-start">
        <Link to='/my-research' className="m-3"><Button className="w-40 bg-red-800 text-white">My Research</Button></Link>
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
            {researches.map((item, key) => {
              return (
                <Col
                  w={{
                    def: "full",
                    sm: "1/1",
                    md: "1/2",
                    lg: "1/3",
                    xl: "1/3",
                  }}
                  h="md:h-full"
                  key={key}
                >
                  <Card border shadow maxW="sm">
                    <img src={img} alt="Example image" />
                    <CardBody>
                      <Article>
                        <ContentTitle size={5}>{item.name}</ContentTitle>
                        <Text is="p">
                          {item.description}
                        </Text>
                      </Article>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Research;
