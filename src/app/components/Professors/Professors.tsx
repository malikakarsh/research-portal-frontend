import React, { useState } from 'react';
import { Select, Field, Label, Row, Col, Card, CardBody, Button, Article, ContentTitle, Text, Aside } from 'tailwind-react-ui'
import './Professor.css'
import img from './Assets/icon.jpg';

const Professor=()=>{
  let professors=[
    {
      name:"Professor 1",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Professor 2",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Professor 3",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Professor 4",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      name:"Professor 5",
      description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
  return(
    <div className="wrapper">
      <div className="grid justify-items-end m-3">
      <div className="searchHolder relative flex w-200 mb-3"> <input type="text" className="searchInput h-10 border-2 border-black pr-8 pl-5 rounded z-0 focus:shadow focus:border-red-800" placeholder="Search"/>
            <div className="absolute top-4 right-3"> <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i> </div>
        </div>
      </div>
      <div className="main-container mb-10">
<div className="results container-1 m-3 flex flex-auto justify-center">
<Row gutter className='md:h-full'>
  {professors.map((item,key)=>{
    return(
      <Col  w={{ def: 'full', sm: '1/1', md: '1/2', lg: '1/3', xl: '1/3' }} h='md:h-full'>
      <Card border shadow maxW="sm">
      <img
        src={img}
        alt="Example image"
      />
      <CardBody><Article>
      <ContentTitle size={5}>{item.name}</ContentTitle>
      <Text is="p">
        {item.description}
      </Text>
    </Article></CardBody>
    </Card>
      </Col>
    )
  })}
</Row>
</div>
</div>
</div>
  )
}

export default Professor;