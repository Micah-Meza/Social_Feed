import React, { useState } from 'react';
import DisplayPosts from './Components/DisplayPosts/DisplayPosts.jsx';


function App() {

  const [entries, setEntries] = useState([{nameEntry : "Micah Meza", message : "I love my kids." }, {nameEntry : "Sarai", message : "I peed. " }])
  //const [postEntry, setPostEntry] = useState([{}])

  return (
      <DisplayPosts parentEntries = {entries}/>
  );
}

export default App;







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