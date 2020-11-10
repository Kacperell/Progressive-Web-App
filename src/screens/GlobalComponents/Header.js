import React from 'react'
import Button from '@material-ui/core/Button';
import './css/Header.scss'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';

function Header({ title, backButton }) {
    return (
        <div className='header'>
            {backButton == 1 &&

                <Link to="/">
                    <IconButton style={{ color: "white" }} >
                        <ArrowBackIcon />
                    </IconButton>
                </Link>}

            <nav className='responsiveContainer'>
                {title}
            </nav>
        </div>
    )
}

export default Header
