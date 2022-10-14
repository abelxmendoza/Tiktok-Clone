import React , { useState } from 'react'
import './VideoSidebar.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function VideoSidebar({likes, comments, shares, bookmarks}) {

  const [liked, setLiked] = useState(false);


  return (
    <div className='videoSidebar'>
        <div className='videoSidebar_buttons'>
            {liked ? (

                <FavoriteIcon fontSize='large' onClick={
                    (e) => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon 
                        fontSize='large' 
                        onClick={(e) => setLiked(true)} 
                    />

                )}
            <p>{liked ? likes + 1 : likes}</p>

        </div>

        <div className='videoSidebar_buttons'>
            <MessageIcon fontSize='large'/>
            <p>15</p>
        </div>

        <div className='videoSidebar_buttons'>
            <BookmarkIcon fontSize='large'/>
            <p>7</p>
        </div>

        <div className='videoSidebar_buttons'>
            <ShareIcon fontSize='large'/>
            <p>4</p>
        </div>
    </div>
  )
}

export default VideoSidebar