import React, { useState } from 'react';
import './dataSharing.scss';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import {
    Link
} from "react-router-dom";


function DataSharing() {
    const [number, setNumber] = useState(7);

    const icremnet = () => {
        setNumber(number + 1);
    }

    const decrement = () => {
        setNumber(number - 1);
    }

    return (
        <div className='dataSharing'>
            <span>Liczba: {number} </span>

            <div>
                <Button
                    variant="contained"
                    onClick={decrement}
                    startIcon={<RemoveIcon />}
                >
                    Odejmij
      </Button>
                <Button
                    variant="contained"
                    onClick={icremnet}
                    startIcon={<AddIcon />} >
                    Dodaj
      </Button>
            </div>
            <Link to={`/DataSharing2/${number}`}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={icremnet}
                >
                    DRUGI EKRAN Z PRZEKAZNĄ LICZBĄ
      </Button>
            </Link>
        </div>
    )
}

export default DataSharing
