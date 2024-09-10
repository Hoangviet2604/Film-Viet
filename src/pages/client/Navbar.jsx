import React from 'react';
import { FaSearch } from "react-icons/fa";

function Navbar(props) {

    return (
        <div>
            <div className="container">
                <div className="netflix">
                    <h1>Netflix</h1>
                    <ul>
                        <li>Home</li>
                        <li>TV Series</li>
                        <li>Movie</li>
                        <li>New & Popular</li>
                        <li>My List</li>
                        <li>Browse by language</li>
                        
                    </ul>
                    <ul>
                        <li><FaSearch/></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;