import React, { useRef,useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';


function Video({url, channel, description, song, likes,comments,shares, bookmarks}) {



    const videoRef = useRef(false)
    const [playing, setPlaying] = useState(null);

    const handleVideoPress = () => {


        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
    
    }


  return (
    <div className='video'>
        
        <video 
            onClick={handleVideoPress}
            className='video_player' 
            ref = {videoRef} 
            loop 
            src={url}
            >


        </video>


        <VideoFooter channel={channel} song={song} description={description}/>
        <VideoSidebar likes={likes} shares={shares} comments={comments} bookmarks={bookmarks} />

    </div>
  )
}

export default Video
