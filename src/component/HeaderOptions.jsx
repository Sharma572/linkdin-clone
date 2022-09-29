import { Avatar } from '@mui/material';
import React from 'react';
import './Header-Options.css';

const HeaderOptions = ({avatar, Icon,title}) => {
  return (
    <div className='headerOptions'>
     {Icon && <Icon className='headerOption_icon' />}
     {avatar && (
      <Avatar className='headerOption_icon' id="avatar-img" src={avatar} />
     )}
    <h4 className='headerOptions__title'>{title}</h4>
    </div>
  )
}

export default HeaderOptions