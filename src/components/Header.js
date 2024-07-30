import React from 'react';
import navbutton from '../assets/icon/navbutton.png';
import add from '../assets/icon/add.png';
import search from '../assets/icon/search.png';
import bell from '../assets/icon/bell.png';
import notification from '../assets/icon/notification.png';
import question from '../assets/icon/question.png';
import downarrow from '../assets/icon/downarrow.png';
import restart from '../assets/icon/restart.png';
import Logo from '../assets/VMaintain.png';
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <header className="flex flex-wrap justify-between items-center w-full p-4 border-b">
            <div className="flex flex-wrap items-center mb-4 md:mb-1">
                <img src={navbutton} alt="Navigation Button" className="mr-4" />
                <img src={Logo} alt="V-Maintain Logo" className="mr-4" />
                <select className="border border-black p-2" name="workspace" id="workspace">
                    <option value="">Workspace Name</option>
                </select>
            </div>
            <div className="flex items-center space-x-2">
                <img src={search} alt="Search" className="w-6 h-6" />
                <img src={notification} alt="Notifications" className="w-6 h-6" />
                <img src={restart} alt="Restart" className="w-6 h-6" />
                <img src={question} alt="Help" className="w-6 h-6" />
                <img src={bell} alt="Alerts" className="w-6 h-6" />
                <img src={add} alt="Add" className="w-6 h-6" />
                <img src={profile} alt="Profile" className="w-6 h-6" />
                <img src={downarrow} alt="Dropdown" className="w-6 h-6" />
            </div>
        </header>
    );
};

export default Header;
