/*
Implement a “handleSubmit” method for your form, which should pass the 
entered values to a function on the App.jsx component. That function 
should create a new “post” object, add it to the existing array of posts, 
and update the App.js state variable with the new array.

*/



import React, { useState } from 'react';


const CreatePost = ({newEntry}) => {

    const [name, setName] = useState(''); 
    const [postEntry, setPostEntry] = useState('');

    function handleSubmit(event){
        event.preventDefault();
        let newEntry = {
            name : name,
            postEntry: postEntry
        };
    }

    return (

        <form onSubmit = {handleSubmit} className =' form-grid'>
            <div className='formgroup'>
                <lable>Name</lable>
                <input type = 'text' className='form-control' value = {name} onChange={(event) => setName(event.target.value)} />
                <lable>Post</lable>
                <input type = 'text' className='form-control' value = {postEntry} onChange={(event) => setPostEntry(event.target.value)} />
            </div>
        </form>


    );
}
 
export default CreatePost;








