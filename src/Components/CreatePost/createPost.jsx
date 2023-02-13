/*
Implement a “handleSubmit” method for your form, which should pass the 
entered values to a function on the App.jsx component. That function 
should create a new “post” object, add it to the existing array of posts, 
and update the App.js state variable with the new array.

*/
import React, { useState } from 'react';
import './CreatePost.css';



const CreatePost = (props) => {

    const [name, setName] = useState(''); 
    const [postEntry, setPostEntry] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            name : name,
            postEntry: postEntry
        };
        console.log(newEntry);
        props.addNewPost(newEntry)
    }

    return (

        <form onSubmit = {handleSubmit}>
        <div class="shadow p-3 mb-5 bg-white rounded">
            <div className='form-groupName'>    
                <label htmlFor='nameId' className="columnLabel"> Name </label>
                    <input type = 'text' className="form-control" id="nameId"  value = {name} onChange={(event) => setName(event.target.value)} />
               
            </div> 

            <div className="form-groupPost">
                <label htmlFor='Post' className="midColumnLabel"> Post </label>  
                    <textarea className="form-control"  id="Post" rows="3"type = 'post' style={{marginTop :'1em',marginBottom : '1rem'}}  value = {postEntry} onChange={(event) => setPostEntry(event.target.value)} ></textarea>
                
            </div>
           
        
            <div className='createButtonContainer'>
                <button type = 'submit' className="btn btn-primary mb-2" style={{'marginTop' : '1rem'}}> Create </button>
            </div>
        </div>
        </form>


    );
}
 
export default CreatePost;








