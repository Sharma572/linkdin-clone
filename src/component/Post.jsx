import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import InputOption from './InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({name,description,photoUrl,message}) => {
  return (
    <div className='post'>
      <div className="post__header">
        <Avatar />
        <div className="post__info">
            <h3>{name}</h3>
            <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__button">
        <InputOption Icon={ThumbUpOffAltIcon} title="like" color='gray' />
        <InputOption Icon={MessageIcon} title="Comment" color='gray' />
        <InputOption Icon={ShareIcon} title="Share" color='gray' />
        <InputOption Icon={SendIcon} title="Send" color='gray' />
      </div>
    </div>
  )
}

export default Post