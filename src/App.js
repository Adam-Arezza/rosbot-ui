import './App.css';
import React, { useState } from 'react';
import Main from './components/Main'
import Menu from './components/Menu';
import { RosProvider } from './components/ROS';
import Connection from './components/Connection';
import TopicsLogger from './components/TopicsLogger';
import RobotCommand from './components/RobotCommand';


function App() {
  const [section,setSection] = useState("")

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
      {section === "Robot Command" ?  <RobotCommand></RobotCommand>: null}
      </Main>
    </RosProvider>
  );
}

export default App;
