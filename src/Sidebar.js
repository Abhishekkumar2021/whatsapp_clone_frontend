import React from 'react'
import "./Sidebar.css"
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar_header'>
        <div className='sidebar_headerLeft'>
          <Avatar src='https://yt3.ggpht.com/yti/APfAmoGRgagu7YYeuv0kC_2H9H9prIT0fn21EFyMeEg7I5I=s88-c-k-c0x00ffffff-no-rj-mo'/>
        </div>
        <div className='sidebar_headerRight'>
          <IconButton>
            <DonutLargeIcon/>
          </IconButton>
          <IconButton>
            <ChatIcon/> 
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div> 
      </div>
      <div className='sidebar_search'>
        <div className="sidebar_searchContainer">
          <SearchIcon/>
          <input type="text" placeholder="Search or start a new chat"></input>
        </div>
      </div>
      <div className='sidebar_chats'>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
        <SidebarChat/>
      </div>
    </div>
  )
}

export default Sidebar