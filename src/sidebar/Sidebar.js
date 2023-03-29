import React from 'react';
import LinksFromWiki from "../data/DataFromWiki.json"
import "./Sidebar.css"
const Sidebar = () => {
    return (
        <div className="Sidebar">
            <nav>
                <ul>
                    {LinksFromWiki.map(el=>
                    <li key={el.id}>
                        <a href={el.href}>{el.title}</a>
                    </li>
                    ) }
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;