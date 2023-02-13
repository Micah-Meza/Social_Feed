/*
Within the “DisplayPosts” component, create the feed where all your posts 
will be displayed in your app. All posts should be passed into this 
component using props. Then, utilize the “map” higher order array method 
to map each post to its own Post component.


*/
import moment from 'moment';
import EntryPost from '../EntryPost/Post.jsx';
import './DisplayPosts.css'


const DisplayPosts = (props) => {
    return (
    <table className='parentTableBox'>
         
      <tbody className='tableBox'>
        {props.parentEntries.map((entries, index) => {
          <EntryPost key={index} index={index} entries={entries} />
          return (
          
            <tr key = {index}>

              <div class="shadow p-3 mb-5 bg-white postBoxDisplay">
            
                <h5>{entries.name}</h5>
                <div className='entryBox'>
                  
                  <div className='postBox'>
                  <p>  
                  <h5>{entries.postEntry}</h5>
                </p>
                </div>

               <div className='footerContainer'>
                {moment(props.createdAt).format('MMM DD, YYYY')}


               
                  
              
                <div className='buttonContainer'>
                        <button type="button" className="btn btn-default">Like</button>
                      </div><div className='buttonContainer'>
                          <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-thumbs-down"></span> Unlike</button>
                        </div>
                
                
              </div>          
              </div> 
              </div>  

            </tr>
              
          );
        })}
      </tbody>
    </table>
    );
}
 
export default DisplayPosts;