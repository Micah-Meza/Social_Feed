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
import Post from './Components/EntryPost/Post.jsx';
import Button from './Components/Button/Button.jsx';




function App() {

  const [entries, setEntries] = useState([{nameEntry : "Micah Meza", message : "I love my kids." }, {nameEntry : "Sarai", message : "I peed. " }])
  //const [postEntry, setPostEntry] = useState([{}])

  function addEntry(entry){

    let tempEntries = [...entries, entry];
    setEntries(tempEntries)
  }



  return (
    <div className='App'>
      <NavBar/>
      <CreatePost addNewPost = {addEntry} />
      <DisplayPosts parentEntries = {entries}/>

   
      </div>
  );
}

export default App;


/*
function NavBar () {
  return (
    <div className=''
  )
}
*/





/*
 <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-8'>
          <div className='border-box'>
            Hello World!
          </div>
        </div>
      </div>
    </div>
    */