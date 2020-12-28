import React, { useEffect, useState } from 'react'
import Button from '@material-ui/core/Button';
import './DownloadingFiles.scss';
import { v4 as uuidv4 } from 'uuid';
function DownloadingFiles() {
    const [photoStatus, setPhotoStatus] = useState(false);
    const [movieStatus, setMovieStatus] = useState(false);

    function msToTime(s) {
        let ms = s % 1000;
        s = (s - ms) / 1000;
        let secs = s % 60;
        s = (s - secs) / 60;
        let mins = s % 60;
        let hrs = (s - mins) / 60;
        return hrs + ':' + mins + ':' + secs + '.' + ms;
    }
    const downloadPhoto = () => {
        setPhotoStatus(`Pobieranie`);
        const t0 = performance.now()
        fetch('https://upload.wikimedia.org/wikipedia/commons/7/78/Canyonlands_National_Park%E2%80%A6Needles_area_%286294480744%29.jpg')
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `photo-${uuidv4()}.jpg`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                console.log("pobrano!");
                const t1 = performance.now()
                const timeDifference = Math.round(t1 - t0);
                const timeMs = msToTime(timeDifference);
                setPhotoStatus(`Zdjęcie pobrane czasie:${timeMs}`);
            })
            .catch(() => console.log("error"));
    }
    const downloadMovie = () => {
        setMovieStatus(`Pobieranie`);
        const t0 = performance.now();
        fetch('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                a.download = `movie-${uuidv4()}.jpg`;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                console.log("pobrano!");
                const t1 = performance.now()
                const timeDifference = Math.round(t1 - t0);
                const timeMs = msToTime(timeDifference);
                setMovieStatus(`Film został pobrany czasie:${timeMs}`);
            })
            .catch(() => console.log("error"));
    }
    return (
        <div className='downloadingFiles'>
            {photoStatus &&
                <span>{photoStatus}</span>
            }
            <Button onClick={downloadPhoto} variant="contained" color="primary">
                Pobierz zdjęcie (2,36 MB)
            </Button>
            {movieStatus &&
                <span>{movieStatus}</span>
            }
            <Button onClick={downloadMovie} variant="contained" color="primary">
                Pobierz Film (158 MB)
            </Button>

        </div>
    )
}

export default DownloadingFiles
