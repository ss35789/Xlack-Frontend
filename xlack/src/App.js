import React from 'react';
import './App.css';
<<<<<<< HEAD
import Header from './components/Header';
import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import Chatcontext from './components/Chatcontext';
import Addchannel from './components/Addchannel';
import axios from 'axios';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { useEffect } from 'react';



function App() {
  const[posts,setPosts]=useState([]);
  // const api=axios.create({
  //   baseURL:'https://xlack.kreimben.com/api/openapi.json'
  // })
  // useEffect(()=>{
  //   axios({
  //     method:'GET',
  //     url:'https://xlack.kreimben.com/api/authentication/github_login'
  //   }).then(res=>setPosts(res.data))
  // })
  
  return (
    <div className="App">
      <Router>
      <>
      <Header/>
      <Appbody>
        <Sidebar/>
        {/* <h1>{posts}hi</h1> */}
        <Routes>
          <Route exact path="/" element={<Chatcontext/>}>
            {/* Chat */}
            
          </Route>
        </Routes>
      </Appbody>
       
      </>
    </Router>
=======
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import styled from 'styled-components';
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import Login from './components/Login';
import Spinner from "react-spinkit";

function App() {
  const [user,loading] = useAuthState(auth);

  if(loading){
    return (
      <AppLoading>
        <AppLoadingContents>
          <img
            src="https://cdn.mos.cms.futurecdn.net/SDDw7Cnuo
            UGax6x9mTo7dd.jpg"
            alt=""
          />
          <Spinner
            name="ball-spin-fade-loader"
            color="purple"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header>
              <AppBody>
                <Sidebar/>
                <Switch>
                  <Route path="/" exact>
                    <Chat/>
                  </Route>
                </Switch>
              </AppBody>
            </Header>
          </>
        )}
        
      </Router>
>>>>>>> 이정한
    </div>
  );
}

export default App;

<<<<<<< HEAD
const Appbody=styled.div`
  display:flex;
  height:100vh;
`;
=======
const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  >img{
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
>>>>>>> 이정한
