import React from 'react';
import './Rightbar.css'
import {user} from '../../DummData'
import Online from '../Online/Online';

const Rightbar = ({profile}) => {

    const HomeRightbar =()=>{
        return(
            <>
                  <div className='birthdayContainer'>
                    <img className='birthdayImg' src='/assets/istockphoto-1053404714-612x612.jpg' alt='' />
                    <span className='birthdayText'>
                        <b>Md.Rakibul Islam</b> <b>and 3 Other friends</b> have a birthday today.
                    </span>
                </div>
                <img className='rightbarAd' src="assets/post/images (1).jpg" alt="" />
                <h4 className='rightbarTitle'>Online Friends</h4>
                <ul className='rightbarFriendList'>
                    {user.map(u=>(
                        <Online key={u.id} user={u}></Online>
                    ))}
                </ul>
            </>
        )
    };

    const ProfileRightbar =()=>{
        return(
            <>
                <h4 className='rightbarTitle'>User Information </h4>
                <div
                 className='rightbarInfo'>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>
                            City
                        </span>
                        <span className='rightbarInfoValue'>
                            New York
                        </span>
                    </div>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>
                            From:
                        </span>
                        <span className='rightbarInfoValue'>
                           madrid
                        </span>
                    </div>
                    <div className='rightbarInfoItem'>
                        <span className='rightbarInfoKey'>
                            Relationship
                        </span>
                        <span className='rightbarInfoValue'>
                            Single
                        </span>
                    </div>
                 </div>
                 <h4 className='rightbarTitle'>User Friends </h4>
                    <div className='rightbarFollowings'>
                        <div className='rightbarFollowing'>
                            <img className='rightbarFollowingImg' src="assets/profile/download (1).jpg" alt=""/>
                            <span className='rightbarFollowingName'>Tanver Rahman</span>
                        </div>
                        <div className='rightbarFollowing'>
                            <img className='rightbarFollowingImg' src="assets/profile/download (2).jpg" alt=""/>
                            <span className='rightbarFollowingName'>Tanver Rahman</span>
                        </div>
                        <div className='rightbarFollowing'>
                            <img className='rightbarFollowingImg' src="assets/profile/download (3).jpg" alt=""/>
                            <span className='rightbarFollowingName'>Tanver Rahman</span>
                        </div>
                        <div className='rightbarFollowing'>
                            <img className='rightbarFollowingImg' src="assets/profile/download.jpg" alt=""/>
                            <span className='rightbarFollowingName'>Tanver Rahman</span>
                        </div>
                        <div className='rightbarFollowing'>
                            <img className='rightbarFollowingImg' src="assets/profile/images.jpg" alt=""/>
                            <span className='rightbarFollowingName'>Tanver Rahman</span>
                        </div>
                        <div className='rightbarFollowing'>
                            <img className='rightbarFollowingImg' src="assets/profile/pexels-ali-pazani-2836485.jpg" alt=""/>
                            <span className='rightbarFollowingName'>Tanver Rahman</span>
                        </div>
                    </div>
            </>
        )
    }

    return (
        <div className='rightBar'>
            <div className='rightbarWrapper'>
              {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    );
};

export default Rightbar;