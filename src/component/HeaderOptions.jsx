import { Avatar } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import './Header-Options.css';

// 

const HeaderOptions = ({ avatar,Icon,title,onClick }) => {

  const user = useSelector(selectUser);

  return (
    <div className="headerOptions" onClick={onClick}>
      {Icon && <Icon className="headerOption_icon" />}
      {avatar && (
        <Avatar
          className="headerOption_icon"
          id="avatar-img"
          src={user?.photoPic}
        >
          {user?.email[0]}
        </Avatar>
      )}

      <h4 className="headerOptions__title">{title}</h4>
    </div>
  );
}

export default HeaderOptions