import React, { useState } from 'react'
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import './AlertScreen.scss';

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    cookieAlert: {
        "& .MuiAlert-icon": {
            fontSize: 0
        }
    }
});

function AlertScreen() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const openAlert = () => {
        setOpen(true);
        setTimeout(
            function () {
                setOpen(false);
            },
            3000
        );
    }
    return (
        <div className='alert-screen'>
            <Collapse
                className='alert-screen__alert'
                in={open}>
                <Alert
                    className={classes.cookieAlert}
                    severity="info"
                >
                    Przykładowy alert
        </Alert>
            </Collapse>
            <Button variant="contained" color="primary"
                onClick={() => {
                    openAlert();
                }}>
                Wyświetl alert
            </Button>
        </div>
    )
}

export default AlertScreen
