import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import './ModalScreen.scss';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        maxWidth: '90%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
    },
}));

function ModalScreen() {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div className='modalBody'>
            <h2 id="simple-modal-title">Modal</h2>
            <p id="simple-modal-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               </p>

        </div>
    );

    return (
        <div className='modalScreen'>


            <Modal
                className='modalScreen__modal'
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>

            <Button variant="contained" color="primary" onClick={handleOpen}>
                Open Modal
        </Button>

        </div>

    );
}


export default ModalScreen
