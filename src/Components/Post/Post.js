import React, { useState } from 'react';
import './Post.css'
import { MoreVert } from '@mui/icons-material'
import { user } from '../../DummData';

const Post = ({post}) => {
    const [like,setLike] = useState(post.like)
    const [isLike,setIsLike] = useState(false)

    const HandlerLike =()=>{
        setLike(isLike ? like - 1 : like + 1)
        setIsLike(!isLike)
    }

    return (
        <div className='post'>
            <div className='postWrapper'>
                <div className='postTop'>
                    <div className='postTopLeft'>
                        <img className='postProfileImg' src={user.filter(u=>u.id === post.userId)[0].profilePic} alt=""/>
                        <span className='postUsername'>
                            {user.filter(u=>u.id === post.userId)[0].userName}
                        </span>
                        <span className='postDate'>{post.date}</span>
                    </div>
                    <div className='postTopRight'>
                        <MoreVert/>
                    </div>
                </div>
                <div className='postCenter'>
                    <span className='postText'>{post?.desc}</span>
                    <img className='postImg' src={post.photo} alt=""/>
                </div>
                <div className='postBottom'>
                    <div className='postBottomLeft'>
                        <img className='loveIcon' src="assets/facebook-love-logo-png-transparent.png" onClick={HandlerLike} alt="" />
                        <img className='loveIcon' src="assets/17-171187_facebook-like-logo-facebook-thumbs-up-emoji.png" onClick={HandlerLike} alt="" />
                        <span className='likeCounter'>
                            {like} people liked it
                        </span>
                    </div>
                    <div className='postBottomRight'>
                        <span className='postCommentText'>{post.Comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;