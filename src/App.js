import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './components/chat/Chat';
import ChatView from './components/chatview/ChatView';
import Login from './components/login/Login';
import Preview from './components/preview/Preview';
import WebcamCapture from './components/webcamCapture/WebcamCapture';
import { login, logout, selectUser } from './features/appSlice';
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic:authUser.photoURL,
          id:authUser.uid,
        }))
      }
      else {
        dispatch(logout());
      }
    })
   }, []);

  return (
    <div className="app">
      {!user
        ? (
          <Login />
          )
        : (
          <div className="app_body">
          <Routes>
            <Route path="/" element={ <WebcamCapture/>}/>
            <Route path="/preview" element={<Preview/>}/>
            <Route path="/chat" element={<Chat />} />
            <Route path="/chat/view" element={<ChatView/>}/>
          </Routes>
          </div>
        )}
    </div>
  );
}

export default App;
