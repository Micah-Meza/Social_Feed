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

        <form onSubmit = {handleSubmit} className='form-grid'>
            <div className='form-group row'>    
                <label htmlFor='nameId' className="col-sm-1 col-form-label"> Name </label>
                <div className="col-sm-10">
                    <input type = 'text' className="form-control" id="nameId"  value = {name} onChange={(event) => setName(event.target.value)} />
                </div>
            </div> 

            <div className="form-group row">
                <label htmlFor='Post' className="col-sm-1 col-form-label"> Post </label>  
                <div className='col-sm-10' justify="center" aligntem='center'>
                    <textarea className="form-control"  id="Post" rows="3"type = 'post' style={{marginTop :'1em'}}  value = {postEntry} onChange={(event) => setPostEntry(event.target.value)} ></textarea>
                </div>
            </div>
           
        
            <div className='container'>
                <button type = 'submit' className="btn btn-primary mb-2" style={{'marginTop' : '1rem'}}> Create </button>
            </div>
        </form>


    );
}
 
export default CreatePost;








