import React from 'react'
import imgexample from '../../assets/imgexample.jpg'
import './Components.scss';
;
function Component() {
    return (
        <div className="component">

            <img src={imgexample} alt="img" />
            <span>
                Komponent
                      </span>
        </div>
    )
}

export default Component
