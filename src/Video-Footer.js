import './Video-Footer.css';
import { Button, Avatar } from '@material-ui/core';
import Ticker from 'react-ticker';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
    return (
        <div className="video-footer">
            <div className="video-footer-text">
                <Avatar src={avatarSrc} />
                <h3>
                    {channel} . <Button>Follow</Button>
                </h3>
            </div>
            <div className="video-footer-ticker">
                <MusicNoteIcon className="video-footer-icon" />
                <Ticker mode="smooth">
                    {
                        ({ index }) => (
                            <>
                                <h1>{song}</h1>
                            </>
                        )
                    }
                </Ticker>
            </div>
            <div className="video-footer-actions">
                <div className="video-footer-actions-left">
                    <FavoriteIcon />
                    <ModeCommentIcon />
                    <SendIcon />
                    <MoreHorizIcon />
                </div>
                <div className="video-footer-actions-right">
                    <div className="video-footer-stat">
                        <FavoriteIcon />
                        <p>{likes}</p>
                    </div>
                    <div className="video-footer-stat">
                        <ModeCommentIcon />
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoFooter;