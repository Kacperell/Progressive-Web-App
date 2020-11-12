import React, { useState, useEffect } from 'react';
import './Accelerometer.scss'

function Accelerometer() {
    const [dataGyroscope, setDataGyroscope] = useState('');
    const [dataAccelerometer, setDataAccelerometer] = useState('');
    useEffect(() => {
        let gyroscope = new window.Gyroscope({ frequency: 10 });
        gyroscope.addEventListener('reading', e => {
            setDataGyroscope(`[${round(gyroscope.x)}, ${round(gyroscope.y)}, ${round(gyroscope.z)}]`);
        });
        gyroscope.start();

        let acl = new window.Accelerometer({ frequency: 10 });
        acl.addEventListener('reading', () => {
            setDataAccelerometer(`[${round(acl.x)}, ${round(acl.y)}, ${round(acl.z)}]`);
        });
        acl.start();
    }, []);


    return (
        <div className='Accelerometer'>
            <span style={{ marginBottom: 15 }}>
                Accelerometer : {dataAccelerometer}
            </span>
            <span style={{ marginBottom: 15 }}>
                Gyroscope : {dataGyroscope}
            </span>
        </div>
    )
}

export default Accelerometer


function round(n) {
    if (!n) {
        return 0;
    }
    return Math.floor(n * 100) / 100;
}