import React from 'react'
import ChatHeader from '../ChatHeader/ChatHeader';
import './Chat.css';
import AddCircleIcon from "@material-ui/icons/AddCircle"
import CardGiftIcon from "@material-ui/icons/CardGiftcard"
import GifIcon from "@material-ui/icons/Gif"
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions"
import Message from '../Message/Message';
function Chat() {
    return <div className="chat">
            <ChatHeader />

            <div className="chatMessages">
                <Message />
                <Message />
                <Message />
            </div>
            <div className="chatInput">
                <AddCircleIcon fontSize="large" />
                <form>
                    <input placeholder={`Message textchannel`} />
                    <button className='chatInputButton' type='submit'>
                        Send Message
                        </button>
                </form>

                <div className="chatInPutIcons">
                    <CardGiftIcon fontSize="large" />
                    <GifIcon fontSize="large" />
                    <EmojiEmotionsIcon fontSize="large" />
                </div>
            </div>
        </div>
}

export default Chat
