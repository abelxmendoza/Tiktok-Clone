import './App.css';
import React from 'react';
import Video from './Video';

function App() {
  return (
    <div className="app">

     <div className='app_videos'>
        <Video 
        url = 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        channel = 'sandwhichGrease'
        description='Making the TikToks'
        song='sunshines'
        likes={222}
        comments={619}
        bookmarks={7}
        shares={9}

        /> 
 
        <Video 
        url = 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        channel = 'buddy_pal'
        description='Abel makes cool apps'
        song='gravy jingle'
        likes={79}
        comments={16}
        bookmarks={3}
        shares={2}
        /> 

        <Video 
        url = 'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4'
        channel = 'mugiwara78'
        description='doing math and reading with Shaq'
        song='Rick Ross'
        likes={4922}
        comments={863}
        bookmarks={597}
        shares={1900}
        /> 
     </div>



    </div>
  );
}

export default App;
