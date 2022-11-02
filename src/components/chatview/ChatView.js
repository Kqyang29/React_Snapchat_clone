import React, { useEffect } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { selectSelectImage } from '../../features/appSlice'
import './ChatView.css'

function ChatView() {
  const selectedImage = useSelector(selectSelectImage);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedImage) {
      exit();
    }
  }, [selectedImage]);

  const exit = () => {
    navigate('/chat');
  }
  return (
    <div className='chatView'>
      <img src={selectedImage} onClick={exit} alt="" />
      <div className="chatView_timer">
      <CountdownCircleTimer
          isPlaying
          duration={10}
          strokeWidth={6}
          size={50}
          colors={['#004777', '#F7B801', '#A30000']}
          colorsTime={[10, 5, 0]}
      >
         {({ remainingTime }) => {
            if (remainingTime === 0) {
              exit()
            }
            return remainingTime;
          }}
      </CountdownCircleTimer>
     </div>
    </div>
  )
}

export default ChatView