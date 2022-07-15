
import './App.css';
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
    </div>
  );
}

export default App;

const Appbody=styled.div`
  display:flex;
  height:100vh;
`;