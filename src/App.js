import './App.css';
import React, { useState } from 'react';
import Main from './components/Main'
import Menu from './components/Menu';
import { RosProvider } from './components/ROS';
import Connection from './components/Connection';
import TopicsLogger from './components/TopicsLogger';
import Teleop from './components/Teleop';


function App() {
  const [section,setSection] = useState("Topics Logger")

  const selectSection = (menuSelect) => {
    setSection(menuSelect)
  }

  return (
    <RosProvider>
      <div style={{display:"flex", flexDirection:"row", background:"black"}}>
      <Menu select={selectSection}></Menu>
      <Connection></Connection>
      </div>
      <Main>
      {section === "Topics Logger" ?  <TopicsLogger></TopicsLogger>: null}
      {section === "Teleop" ?  <Teleop></Teleop>: null}
      </Main>
    </RosProvider>
  );
}

export default App;
