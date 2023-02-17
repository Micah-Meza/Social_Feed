/*
Within the “Post” component create a template of how you would like each 
individual post to be displayed. This will include the user’s name, the 
body of the post, and the “like” and “dislike” buttons.

· For now, do not worry about the functionality for the “like” and 
“dislike” buttons – just decide where and how you would like them to 
display on each individual post!

*/


/*
Lastly, you will need to build out the “like” and “dislike” functionality. 
Within the “Post” component, create 2 separate functions – one for when 
the “like” button is clicked, and one for when the “dislike” button is 
clicked. Bind these functions to their respective button’s onClick event. 
Within these functions, start to lay out the steps that need to occur 
when each button is clicked.

*/


import'../EntryPost/Post.css';
import {BsFillHandThumbsDownFill, BsFillHandThumbsUpFill} from "react-icons/bs";
import React, { useState } from 'react';
import moment from 'moment';




const Post = ({entry}) => {
    const [activeThumbsUp, setActiveThumbsUp] = useState(false)
    const [activeThumbsDown, setActiveThumbsDown] = useState(false)
    return (
        <div className="post-container">

            <div className='name'>
                <h3>{entry.name}</h3>
            </div>

            <div className='postBox'>
                <p><h3>{entry.postEntry}</h3></p>
            </div>

            <div className='footerContainer'>
                {moment(entry.createdAt).format('MMM DD, YYYY')}

            
                <div className='thumbButtons'>
                    
                    <BsFillHandThumbsUpFill onClick={() => setActiveThumbsUp(!activeThumbsUp)} color = {activeThumbsUp ? 'green': 'gray'} />
            
                    <BsFillHandThumbsDownFill onClick={() => setActiveThumbsDown(!activeThumbsDown)} color = {activeThumbsDown ? 'red': 'gray'}/>
            </div>     
            </div>
        </div>

    );
}
 
export default Post;

