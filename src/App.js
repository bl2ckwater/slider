import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import styled from 'styled-components';

import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import SecondPage from './components/SecondPage';

const url = process.env.PUBLIC_URL+'/img/bg.jpeg';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #595959;
  opacity: 1;
  position: sticky;
  top: 0px;
  z-index: 999;
`

const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 20px;
`

const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px;
  background: url(${url}) no-repeat;
  background-size: cover;
`

class App extends Component {
  render() {
    return (
      <Router>
      	<div className="App">
        <HeaderWrapper>
          <Grid>
            <Header />
          </Grid>
        </HeaderWrapper>
        <MenuWrapper>
          <Grid>
            <Menu />
          </Grid>
        </MenuWrapper>
        <MainWrapper>
          <Grid>
            <Route path='/' component={Main} exact/>
            <Route path='/second' component={SecondPage}/>
          </Grid>
        </MainWrapper>
      </div>
      </Router>
    );
  }
}

export default App;
