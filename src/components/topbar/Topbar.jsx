import React from 'react';
import "./topbar.css";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import { jsx, css, Global, ClassNames } from '@emotion/react';
import styled from '@emotion/styled';

export default function Topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapped'>
            <div className='topLeft'>
                <span className='logo'>MuchiriJayb</span>
            </div>
            <div className='topRight'>
              <div className='topbarIconContainer'>
                <NotificationsNone />
                <span className='topIconBag'>2</span>
                </div>
                <div className='topbarIconContainer'>
                <Language />                
                </div>
                <div className='topbarIconContainer'>
                <Settings />                
                </div>
                <img src='my pic1' className='topAvatar'/>
            </div>
        </div>
    </div>
  )
}
