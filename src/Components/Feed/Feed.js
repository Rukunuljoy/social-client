import React from 'react';
import Post from '../Post/Post';
import Shared from '../Shared/Shared';
import './Feed.css'
import { posts } from '../../DummData';

const Feed = () => {
    return (
        <div className='feed'>
            <div className='feedWrapper'>
                <Shared></Shared>
                {posts.map((p)=>(

                <Post key={p.id} post={p}/>
                ))}
                
            </div>
        </div>
    );
};

export default Feed;