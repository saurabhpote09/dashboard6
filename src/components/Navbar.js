import React from 'react';

import dashboard from '../assets/icon/dashboard.png';
import sites from '../assets/icon/sites.png';
import tags from '../assets/icon/tags.png';
import projects from '../assets/icon/projects.png';
import clients from '../assets/icon/clients.png';
import team from '../assets/icon/teams.png';
import support from '../assets/icon/support.png';
import setting from '../assets/icon/setting.png';

const Navbar = () => {
    const navItems = [
        { src: dashboard, alt: 'Dashboard', label: 'Dashboard' },
        { src: sites, alt: 'Sites', label: 'Sites' },
        { src: tags, alt: 'Tags', label: 'Tags' },
        { src: projects, alt: 'Projects', label: 'Projects' },
        { src: clients, alt: 'Clients', label: 'Clients' },
        { src: team, alt: 'Team', label: 'Team' },
        { src: support, alt: 'Support', label: 'Support' },
        { src: setting, alt: 'Settings', label: 'Settings' },
    ];

    return (
        <nav className="p-4 h-full  flex flex-col bg-gray-100">
            <ul className="space-y-4">
                {navItems.map((item, index) => (
                    <li key={index} className="flex items-center p-2 rounded hover:bg-green-100 transition duration-300">
                        <img src={item.src} alt={item.alt} className="mr-4" />
                        <span className="font-semibold">{item.label}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
