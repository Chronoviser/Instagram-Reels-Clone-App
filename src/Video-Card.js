import { useRef, useState } from 'react';
import './Video-Card.css';
import VideoHeader from './Video-Header.js';
import VideoFooter from './Video-Footer.js';

function VideoCard({ avatarSrc, channel, likes, shares, song, url }) {

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            videoRef.current.pause();
            setIsVideoPlaying(false);
        }
        else {
            videoRef.current.play();
            setIsVideoPlaying(true);
        }
    }

    return (
        <div className="video-card">
            <VideoHeader />
            <video
                className="video-player"
                src={url}
                alt=""
                loop
                ref={videoRef}
                onClick={onVideoPress}
            />
            <VideoFooter
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    );
}

export default VideoCard;