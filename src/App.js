import './App.css';
import VideoCard from './Video-Card';
import { useState, useEffect } from 'react';
import db from './firebase';

function App() {

  const [reels, setReels] = useState([]);

  useEffect(() => {
    db
      .collection('reels')
      .onSnapshot(
        snapshot => setReels(snapshot.docs.map(doc => doc.data()))
      )
  }, [])

  return (
    <div className="app">
      <div className="app-top">
        <img className="app-top-logo" src="https://cdn4.iconfinder.com/data/icons/social-media-2210/24/Instagram-512.png" alt="" />
        <h1>Reels</h1>
      </div>
      <div className="app-videos">
        {
          reels.map(({ channel, avatarSrc, song, url, shares, likes }) => <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            url={url}
            likes={likes}
            shares={shares}
          />)
        }
      </div>
    </div>
  );
}

export default App;
