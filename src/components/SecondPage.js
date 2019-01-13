import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './Slider';

const Repair = styled.div`
	color: #ffffff;
	font-weight: 700;
	line-height: 50px;
	font-size: 40px;

	span {
		display:block;
		font-size: 24px;
		line-height: 30px;
	}
`
const LightText = styled.div`
	color: #ffffff;
	font-weight: 300;
	line-height: 28px;
	font-size: 18px;
	margin-top: 54px;
`

const CallBtn = styled.button`
  width: 247px;
  height: 67px;
  background-color: #3fc7db;
  border-radius: 30px;
  color: #ffffff;
  font-size: 18px;
  transition-duration: 0s ease-in-out;
  transition:width 1s ease-in-out;
  &:hover {
  background-color: #34adbf;
  }
`

class SecondPage extends React.Component {
	render(){
		return (
			<Row>
				<Col lg={5}>
					<h2 className='white'>Это другая страница.</h2>
				</Col>
				<Col lg={6} lgOffset={1}>
					<div className='white'>Наши преимущества</div>
				</Col>
			</Row>
			)
	}
}

export default SecondPage