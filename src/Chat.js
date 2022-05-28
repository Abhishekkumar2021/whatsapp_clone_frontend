import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import './Chat.css'
import axios from 'axios';

function Chat({messages}) {
  const [input,setInput] = useState("");
  const handleSubmit = async (e)=>{
    e.preventDefault();
    await axios.post("/messages/new/",{
      message:input,
      name:"Demo App",
      timestamp:"Demo timestamp",
      recieved:false
    })
    setInput("");
}
  return (
    <div className='chat'>
      <div className='chat_header'>
        <Avatar />
        <div className='chat_headerInfo'>
          <h2>Room name</h2>
          <p>last seen....</p>
        </div>
        <div className='chat_headerRight'>
        <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <AttachFileIcon/> 
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
        </div>
      </div>
      <div className='chat_body'>
        {messages.map(message=>(
          <p key={message._id} className={message.recieved?'chat_message chat_reciever': 'chat_message'}>
          <span className='chat_name'>{message.name}</span>
          {message.message}
          <span className='chat_timestamp'>{message.timestamp}</span>
        </p>
        )
        )}
      </div>
      <div className='chat_footer'>
        <InsertEmoticonIcon/>
        <form >
          <input type="text" value={input} onChange={e=>setInput(e.target.value)} placeholder="Type a message..."/>
          <button type="submit" onClick={handleSubmit} ></button>
        </form>
        <MicIcon/>
      </div>
      <div className='chat_input'></div>
    </div>
  )
}

export default Chat;