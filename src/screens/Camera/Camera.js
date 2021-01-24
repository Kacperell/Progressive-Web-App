import React, { useState } from 'react'
import './Camera.scss';
import Button from '@material-ui/core/Button';

function Camera() {
    const [image, setImage] = useState(null);

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                setImage(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }
    return (
        <div className='Camera'>
            <img id="target" src={image} />

            <Button variant="contained" color="primary">

                <label for="upload-photo">Zrób zdjęcie</label>
                <input
                    onChange={onImageChange}
                    id="upload-photo"
                    type="file" accept="image/*" capture="environment"></input>
            </Button>

        </div>
    )
}

export default Camera
