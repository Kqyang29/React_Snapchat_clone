import { StopRounded } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ReactTimeago from 'react-timeago'
import { selectImage } from '../../features/appSlice'
import { db } from '../../firebase'
import './ChatBox.css'

function ChatBox({ profilePic, id, username, read, imageUrl, timestamp }) {
  
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const open = () => {
    // if (!read) {
    //   dispatch(selectImage(imageUrl));
    //   db.collection('snapchatPosts').doc(id).update({
    //     read: true,
    //   }, { merge: true });


    //   navigate('/chat/view');
    // }

      dispatch(selectImage(imageUrl));
      navigate('/chat/view');

  }

  return (
    <div onClick={open} className='chatBox'>
      <Avatar className='chatBox_avatar' src={profilePic} />
      <div className="chatBox_info">
        <h4>{username}</h4>
        <p>{!read&&"Tap to view -"}{" "}
          <ReactTimeago date={new Date(timestamp?.toDate()).toUTCString()} />
        </p>
      </div>

      {!read && <StopRounded className='chatBox_read'/>}
    </div>
  )
}

export default ChatBox