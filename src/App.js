import './App.css';
import axios from './axios';
import React, { useState, useEffect } from 'react';
import Video from './Video';


function App() {

  const [videos, setVideos] =  useState([])

  useEffect(() => {
    
    async function fetchPosts(){
      const response = await axios.get('/v2/posts');
      setVideos(response.data);

      return response;
    }

    fetchPosts();
    
  }, []);

  return (
    <div className="app">

     <div className='app_videos'>


      {videos.map(
        ({url, channel, description, song, likes, bookmarks, comments, shares}) => (
          
          <Video 
          url={url}
          channel={channel}
          description={description}
          song={song}
          likes={likes}
          bookmarks={bookmarks}
          comments={comments}
          shares={shares}
          />

 

      ))}

     { /*
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


*/}
     </div>





    </div>
  );
}

export default App;
