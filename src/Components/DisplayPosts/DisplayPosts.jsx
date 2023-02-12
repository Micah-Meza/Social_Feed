/*
Within the “DisplayPosts” component, create the feed where all your posts 
will be displayed in your app. All posts should be passed into this 
component using props. Then, utilize the “map” higher order array method 
to map each post to its own Post component.


*/
import moment from 'moment';
import EntryPost from '../EntryPost/Post.jsx';


const DisplayPosts = (props) => {
    return (
    <table className='table'>
         
      <tbody className='table '>
        {props.parentEntries.map((entries, index) => {
          <EntryPost key={index} index={index} entries={entries} />
          return (
            <tr key = {index}>
              <td>
                <h5>{entries.name}</h5>
                <p>
                  <h5>{entries.postEntry}</h5>
                </p>
              <div>
                {moment(props.createdAt).format('MMM DD, YYYY')}
              </div>
              
              <div className='glyphicon'>
                <span className="glyphicon glyphicon-thumbs-up"></span>             
                <button type="button" className="btn btn-default" ><span className="glyphicon glyphicon-thumbs-up"></span>Like</button>
              
                <span className="glyphicon glyphicon-thumbs-down"></span>
                <button type="button" className="btn btn-default"><span className="glyphicon glyphicon-thumbs-down"></span> Unlike</button>
              </div>             
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    );
}
 
export default DisplayPosts;