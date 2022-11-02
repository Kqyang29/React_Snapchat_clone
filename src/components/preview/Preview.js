import { AttachFile, Close, Create, Crop, MusicNote, Note, Send, TextFields, Timer } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { resetCameraImage, selectcamera } from '../../features/cameraSlice';
import { db, storage } from '../../firebase';
import './Preview.css'
import {serverTimestamp} from 'firebase/firestore'
import { ref,getDownloadURL, uploadString  } from "firebase/storage";
import { selectUser } from '../../features/appSlice';
import { v4 as uuid } from 'uuid';


function Preview() {
  const cameraImage = useSelector(selectcamera);
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => { 
    if (!cameraImage) {
      navigate('/');
    }
  }, [cameraImage, navigate]);
  
  const closePreview = () => {
    dispatch(resetCameraImage());
  }

  const sendPost = ()=> {
    
    // const id = uuid();

    const storageRef = ref(storage, `snapchatPosts/${user.id}`);
    const uploadTask = uploadString(storageRef, cameraImage, "data_url");
    
    uploadTask.then(async () => {
      const url = await getDownloadURL(storageRef);
      await db.collection('snapchatPosts').add({
        username: user.username,
        read: false,
        profilePic: user.profilePic,
        timestamp: serverTimestamp(),
        imageUrl: url,
      });
      navigate('/chat')

    });

    

  }

  return (
    <div className='preview'>
      <Close
        className='preview_close'
        onClick={closePreview}
        fontSize="medium"
      />
      <div className="preview_toolBarRight">
        <TextFields />
        <Create />
        <Note />
        <MusicNote />
        <AttachFile />
        <Crop />
        <Timer/>
      </div>
      <img src={cameraImage} alt="" />
      <div onClick={sendPost} className="preview_footer">
        <h2>Send Now</h2>
        <Send
          className='preview_send'
          fontSize='small'
        />
      </div>
    </div>
  )
}

export default Preview