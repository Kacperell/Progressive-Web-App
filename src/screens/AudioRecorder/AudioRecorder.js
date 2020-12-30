import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import './AudioRecorder.scss';

const MicRecorder = require('mic-recorder-to-mp3');


function AudioRecorder() {
    const [fileAudio, setfileAudio] = useState(null);
    const [isRecording, setIsRecording] = useState('');

    const recorder = new MicRecorder({
        bitRate: 128
    });



    const startRecording = async () => {
        console.log('s1');
        // request permission to use  microphone
        // setIsRecording('Nagrywanie...');
        recorder.start().then(() => {

            console.log('s2');
        }).catch((e) => {
            alert(e);
            console.log(e);
            // setIsRecording('Błąd');

            console.error(e);
        });
    }
    const stopRecording = async () => {
        recorder
            .stop()
            .getMp3().then(([buffer, blob]) => {
                const file = new File(buffer, 'me-at-thevoice.mp3', {
                    type: blob.type,
                    lastModified: Date.now()
                });
                setfileAudio(file);
                setIsRecording('Nagrano');

            }).catch((e) => {
                alert(e);
                setIsRecording('Błąd');
                console.log('eee', e);
            });
    }

    const playSound = async () => {
        if (!fileAudio) return
        const player = new Audio(URL.createObjectURL(fileAudio));
        player.play();

    }
    return (
        <div className='audioRecorder'>
            {isRecording}
            <Button onClick={startRecording} variant="contained" color="primary">
                Nagraj
            </Button>
            <Button onClick={stopRecording} variant="contained" color="primary">
                Zatrzymaj
            </Button>
            {fileAudio &&
                <Button onClick={playSound} variant="contained" color="primary">
                    Odtwórz
            </Button>}
        </div>
    )
}

export default AudioRecorder
