import React, { useEffect, useState } from 'react';
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import RateReviewIcon from '@mui/icons-material/RateReview';
import InputOption from './InputOption';
import Post from './Post';
import { db } from "./component/firebase";

const Feed = () => {

  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot)=>
    setposts(
      snapshot.docs.map((doc)=>(
        {
          id: doc.id,
          data: doc.data(),
        }
      ))
    )
    )
  })
  

  const sendPost = (e) =>{
   e.preventDefault();
   
  }

  return (
    <div className='feed'>
        <div className="feed__postContainer">
           <div className="feed__input">
              <CreateIcon />
              <form>
                <input type="text" />
                <button type='submit' onClick={sendPost}>Send</button>
              </form>
           </div>
           <div className='feedInputOptions'>
             <InputOption Icon={InsertPhotoIcon} title="Photo" color='#70B5F9' />
             <InputOption Icon={SubscriptionsIcon} title="Video" color='#5f9b41' />
             <InputOption Icon={EventNoteIcon} title="Event" color='#a872e8' />
             <InputOption Icon={RateReviewIcon} title="Write article" color='#e16745' />
           </div>
        </div>
        {/* Posts */}
        {posts.map((post)=>(
          <Post />
        ))}
        <Post name='Raunak Sharma' description='This is test' message='Great'  />
    </div>
  )
}

export default Feed