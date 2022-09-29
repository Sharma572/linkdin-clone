import React from 'react';
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import RateReviewIcon from '@mui/icons-material/RateReview';
import InputOption from './InputOption';

const Feed = () => {
  return (
    <div className='feed'>
        <div className="feed__postContainer">
           <div className="feed__input">
              <CreateIcon />
              <form>
                <input type="text" />
                <button type='submit'>Send</button>
              </form>
           </div>
           <div className='feedInputOptions'>
             <InputOption Icon={InsertPhotoIcon} title="Photo" color='#70B5F9' />
             <InputOption Icon={SubscriptionsIcon} title="Video" color='#5f9b41' />
             <InputOption Icon={EventNoteIcon} title="Event" color='#a872e8' />
             <InputOption Icon={RateReviewIcon} title="Write article" color='#e16745' />
           </div>
        </div>
    </div>
  )
}

export default Feed