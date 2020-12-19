import React from 'react';
import Button from '@material-ui/core/Button';
import Component from './Component';

import './Components.scss';
import {
    Link
} from "react-router-dom";


function ComponentsScreen() {
    return (
        <div className='componentsScreen'>

            <Component />
            <Link to='/ComponentsScreen2'>
                <Button variant="contained" color="primary">
                    <span>
                        Komponenty drugi ekran
                </span>
                </Button>
            </Link>


        </div>
    )
}

export default ComponentsScreen
