
import { RadioButtonUnchecked } from '@mui/icons-material';
import React, { useRef } from 'react'
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import { setCameraImage } from '../../features/cameraSlice';
import './WebcamCapture.css';

// call video constrains
const videoConstraints = {
  width: 250,
  height: 400,
  facingMode: "user"
};


function WebcamCapture() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    // console.log(imageSrc);
    dispatch(setCameraImage(imageSrc));
    navigate("/preview");
  }, [webcamRef]);
  
  return (
    <div className='webcamCapture'>
      <Webcam
        audio={false}
        height={videoConstraints.height}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={videoConstraints.width}
        videoConstraints={videoConstraints}
      />

      <RadioButtonUnchecked
        className='webcamCapture_btn'
        onClick={capture}
        fontSize='large'
      />

    </div>
  )
}

export default WebcamCapture
