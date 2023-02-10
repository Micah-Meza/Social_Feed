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

import React from 'react';
import'../EntryPost/Post.css';


const Post = (props) => {
    return (
        <div className="post-container">
            <h1>{props.name}</h1>
            <p>{props.postEntry}</p>

        </div>

    );
}
 
export default Post;

