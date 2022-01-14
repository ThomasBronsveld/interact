import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from '../SidebarChannel/SidebarChannel';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import CallIcon from '@material-ui/icons/Call';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import MicIcon from "@material-ui/icons/Mic"
import HeadSetIcon from "@material-ui/icons/Headset"
import SettingsIcon from "@material-ui/icons/Settings"
import { Avatar} from "@material-ui/core";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <h3>Interact</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar_channelsHeader">
                    <div className="sidebar_header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar_addChannel" />
                </div>

                <div className="sidebar_channelsList">
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                    <SidebarChannel />
                </div>
            </div>

            <div className="sidebar_-voice">
                <SignalCellularAltIcon 
                className="sidebar_voiceIcon"
                fontSize="large"
                />

                <div className="sidebar__voiceInfo">
                    <h3>Voice connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebarVoiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar />

                <div className="sidebar__profileInfo">
                    <h3>Thomas Bronsveld</h3>
                    <p>#ThisisMyId</p>
                </div>
            
                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadSetIcon />
                    <SettingsIcon />

                </div>
            </div>
        </div>
    )
}

export default Sidebar
