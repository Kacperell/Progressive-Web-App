import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button';

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
        fetch('https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4')
            .then(resp => resp.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.style.display = 'none';
                a.href = url;
                // the filename you want
                a.download = 'movie.mp4';
                // a.download = 'photo.jpg';
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(url);
                console.log("pobrano!");
            })
            .catch(() => console.log("bład!"));
    }
    return (
        <div className='DownloadingFiles'>
            DownloadingFiles
            {photoStatus &&
                <span>{photoStatus}</span>
            }
            <Button onClick={https} variant="contained" color="primary">
                Pobierz zdjęcie (2,36 MB)
            </Button>
            {photoStatus &&
                <span>{movieStatus}</span>
            }


        </div>
    )
}

export default DownloadingFiles
