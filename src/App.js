
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'
import axios from './axios';

function App() {
  const [messages,setMessages] = useState([])

  useEffect(()=>{
    
    
    async function fetchData() {
      const response = await axios.get('/messages/sync')
      setMessages(response.data);
    }
    fetchData();
    
  },[])
  useEffect(()=>{
    const pusher = new Pusher('cdbda62dc4f6b4d7034a', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      setMessages([...messages,data])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  },[messages])
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
