import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Chat from './components/Chat/Chat';
import Login from './Login'
import { selectUser } from "./features/userSlice";
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector(selectUser);
  return (

    /**
     * BEM naming convention, so lower cases
     */


    /*
    Chat
    */
    <div className="app">
      <>
          <Sidebar />
          <Chat />
        </>
      {/* {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )} */}

    </div>
  );
}

export default App;
