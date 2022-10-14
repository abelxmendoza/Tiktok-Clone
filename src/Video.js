import React, { useRef,useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';

function Video() {

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
            src='https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4' 
            >


        </video>


        <VideoFooter />
        <VideoSidebar />
    </div>
  )
}

export default Video
