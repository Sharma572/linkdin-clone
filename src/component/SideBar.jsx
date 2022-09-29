import { Avatar } from '@mui/material'
import React from 'react';
import './SideBar.css'

const SideBar = () => {
    const recentItems = (topics)=>(
        <div className='sideBar__recentItems'>
          <span className='sideBar__hash'>#</span>
          <p>{topics}</p>
        </div>
    )
  return (
    <div className='sideBar'>
    <div className="sideBard_Top">
        <img className='cover__img' src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlua2VkaW4lMjBjb3ZlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
        <Avatar className='sideBar__avatar' />
        <h3>Raunak Sharma</h3>
        <h5>raunak0097@gmail.com</h5>
    </div>
    <div className="sideBar__stats">
        <div className="sideBar__stat">
          <p>Who viewed you.</p>
          <p className='sidBar__numbers'>99999</p>
        </div>

        <div className="sideBar__stat">
        <p>Views on post.</p>
          <p className='sidBar__numbers'>5999</p>
        </div>
    </div>

    <div className="sideBar__Bottom">
        <p>Recent</p>
     {recentItems('Front end Dev.')}
     {recentItems('JavaScript')}
     {recentItems('BlockChain Dev.')}
     {recentItems('Web3')}
     {recentItems('Java Developer')}
    </div>
    </div>
  )
}

export default SideBar