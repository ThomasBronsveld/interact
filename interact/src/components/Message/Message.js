import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Message.css"
function Message() {
    return <div className="messag">
        <Avatar />
        <div className="messageInfo">
            <h4>
                Test
                <span className='messageTimestamp'>
                    This is a timestamp
                </span>
            </h4>
            <p>This is a message</p>
        </div>
    </div>
}

export default Message
