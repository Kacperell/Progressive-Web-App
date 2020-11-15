import React from 'react'
import YouTube from 'react-youtube';
import './VideoYT.scss';
function VideoYT() {
    const video_opts = {
        playerVars: {
            autoplay: 0,
        }
    };

    return (
        <div className='videoYT'>
            <YouTube className='ytframe' videoId="fwkJtgVswgM" opts={video_opts} />;
        </div>
    )
}

export default VideoYT
