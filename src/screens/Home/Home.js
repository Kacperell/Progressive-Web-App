import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import screens from '../../screensArray';


import {
    Link
} from "react-router-dom";



function Home() {
    return (
        <div className='home'>

            <List  >

                {screens.map((screen, i) => (
                    <Link key={i} to={screen.path}>
                        <ListItem button >
                            <ListItemText primary={screen.titleInList} />
                        </ListItem>

                    </Link>
                ))}

            </List>

        </div>
    )
}

export default Home
