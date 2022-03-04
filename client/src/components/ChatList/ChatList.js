import React from "react";
import Chat from "../Chat/Chat";
//CSS

function ChatList() {
  return (
    <div className="chat-list">
      <h1>ChatList</h1>
      <Chat
        firstName="John"
        lastMsg="Wanna start the beatles?"
        profPic="https://www.plasticosydecibelios.com/wp-content/uploads/2019/09/JohnLennon-Imagine-portrait-closeup-min.jpg"
        timestamp="1 hour ago"
      />
      <Chat
        firstName="Jimi"
        lastMsg="lets shred ? xoxo"
        profPic="https://www.stuttgarter-nachrichten.de/media.media.a4e68f92-1cee-43e4-a45a-2aab26cd1518.original1024.jpg"
        timestamp="2 weeks ago"
      />
      <Chat
        firstName="Ellie"
        lastMsg="pip pop popalot"
        profPic="https://wallpaperheart.com/wp-content/uploads/2018/06/Ellie-Goulding-Wallpapers-HD-9.jpg"
        timestamp="3 weeks ago"
      />
    </div>
  );
}

export default ChatList;
