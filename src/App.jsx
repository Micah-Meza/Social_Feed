/*
(5 points): As a developer, I want to make at least 7 good, 
consistent commits.

(5 points): As a developer, I want to use the Create-React-App 
to create my React project.

(5 points): As a developer, I want to display all posts (name, 
  body, & liked status) within a feed on the main page.

(10 points): As a developer, I want to create “like” and “dislike” 
buttons so that I can visually show & toggle between “liking” and 
“disliking” a post.

(10 points): As a developer, I want to create a form on a separate 
component so that I can add a new post to the main feed.

(5 points): As a developer, I want to create a minimum of three 
React components and use them within my application 
(EX: CreatePost, DisplayPosts, Post, NavBar)

(5 points): As a developer, I want to have an aesthetically 
pleasing user interface to ensure a great user experience

BONUS:

(5 points): As a developer, I want to add a date to all posts 
and post creations.

*/

//**************************************************************************************************************************************************************************************************** */

import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';
import NavBar from './Components/NavBar/NavBar.jsx';
import CreatePost from './Components/CreatePost/CreatePost.jsx';
import './App.css';





function App() {


  const [entries, setEntries] = useState([{name : "Micah Meza", postEntry : "I love my kids."}, {name: "Sarai", postEntry : "I saw a dog. "}])
  //const [postEntry, setPostEntry] = useState([{}])


  function addNewEntry(entry){

    let tempEntries = [...entries, entry,];
    setEntries(tempEntries)
  }



  return (
    <div>
      <div className='row'>
        <div className='col-sm-12'>

          <div>
            <NavBar/>
          </div>

      <div className='container-fluid'>
          <div className='border-box' style={{alignItems: "center",justifyContent: "center"}}>
            <CreatePost addNewPost = {addNewEntry} />
          </div>
  
          <div className='grid-box' >
            <DisplayPosts parentEntries = {entries}/>
          </div>

      </div>
       
        </div>
      </div>
    
     
   
    </div>
  );
}

export default App;




