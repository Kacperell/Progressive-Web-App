import React from 'react'
import {
    useParams
} from "react-router-dom";
import './dataSharing.scss';
function DataSharing2() {
    let { number } = useParams();
    return (
        <div className='DataSharing2'>
            Liczba: {number}
        </div>
    )
}

export default DataSharing2
