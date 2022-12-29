import React from 'react';
import './Shared.css'
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'

const Shared = () => {
    return (
        <div className='shared'>
            <div className='sharedWrapper'>
                <div className='sharedTop'>
                    <img src="assets/profile/download (2).jpg" alt="" className='sharedProfileImg'/>
                    <input type="text" className="sharedInput" placeholder="whats's in your mind shake"/>
                </div>
                <hr className="sharedHr"/>
                <div className='sharedBottom'>
                    <div className='shareOptions'>
                        <div className='shareOption'>
                            <PermMedia htmlColor='tomato' className='shareIcon'/>
                            <span className='shareOptionText'>Photo or Video</span>
                        </div>
                        <div className='shareOption'>
                            <Label htmlColor='blue' className='shareIcon'/>
                            <span className='shareOptionText'>Tag</span>
                        </div>
                        <div className='shareOption'>
                            <Room htmlColor='green' className='shareIcon'/>
                            <span className='shareOptionText'>Location</span>
                        </div>
                        <div className='shareOption'>
                            <EmojiEmotions htmlColor='black' className='shareIcon'/>
                            <span className='shareOptionText'>Feelings</span>
                        </div>
                    </div>
                    <button className='shareButton'>Share</button>
                </div>
            </div>
        </div>
    );
};

export default Shared;