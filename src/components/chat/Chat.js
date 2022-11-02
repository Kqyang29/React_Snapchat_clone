import { ChatBubble, RadioButtonUnchecked, Search } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React, {  useEffect, useState } from 'react'
import {  useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { selectUser } from '../../features/appSlice';
import { auth, db } from '../../firebase';
import ChatBox from '../chatBox/ChatBox';
import './Chat.css';

function Chat() {
  const [posts, setPosts] = useState([]);

  const user = useSelector(selectUser);

  const navigate = useNavigate();
  


  useEffect(() => { 
    db.collection('snapchatPosts').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map(doc => (
        {
          id: doc.id,
          data:doc.data(),
          
        }
      )));
    });
  }, []);

  const takeSnap = () => {
    navigate('/');
  }

  console.log(posts);
  return (
    <div className='chat'>
      <div className="chat_header">
        <Avatar src={user.profilePic} onClick={()=>auth.signOut()} className='chat_avatar' />
        <div className="chat_search">
          <Search className='chat_searchIcon'/>
          <input type="text" placeholder='Friends' />
        </div>
        <ChatBubble className='chat_chatIcon'/>
      </div>

      <div className="chat_post">
        {posts.map(({id,data:{profilePic,username,imageUrl,read,timestamp}})=>(
          <ChatBox
            key={id}
            id={id}
            username={ username }
            timestamp = { timestamp }
            read={read}
            profilePic={profilePic}
            imageUrl={imageUrl}
          />
        ))}
      </div>

      <RadioButtonUnchecked
        className='Chat_snap'
        onClick={takeSnap}
        fontSize='large'
      />

    </div>
  )
}

export default Chat