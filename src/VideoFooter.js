import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'



function VideoFooter({channel, description, song}) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <h3>@abrownrecluse</h3>
            <p>Making the TikToks</p>
            <div className='videoFooter_ticker'>
                <MusicNoteIcon 
                className= "videoFooter_icon" />
                <Ticker mode='smooth' className = "ticker">
                    {({index}) => (
                        <>
                            <p>I am a song!</p>
                        </>
                    )}
                </Ticker>
            </div>

        </div>

        <img 
            className='videoFooter_record'
            src="https://static.thenounproject.com/png/934821-200.png"
            alt="" 
        />
        

    </div>
  )
}

export default VideoFooter