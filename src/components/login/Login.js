import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../features/appSlice';
import { auth, provider } from '../../firebase';
import "./Login.css"

function Login() {

  const dispatch = useDispatch();

  const signin = () => {
    auth.signInWithPopup(provider).then(result => {
      dispatch(login({
        username: result.user.displayName,
        profilePic:result.user.photoURL,
        id:result.user.uid,
      }))
    }).catch(e=>alert(e));
  }

  return (
    <div className='login'>
      <div className="login_container">
        <img src="https://th.bing.com/th/id/R.953fb9dc4cbe0a41befeba1baa6868c6?rik=8lbitgJsEVCB9w&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f07%2fSnapchat_logo.png&ehk=yRd5IPRvBC%2ba%2bi2ZVaADENx19uG3M8DpszFG9Z0BE2Q%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <Button variant='outline' onClick={signin}>
          Sign In
        </Button>
      </div>
    </div>
  )
}

export default Login