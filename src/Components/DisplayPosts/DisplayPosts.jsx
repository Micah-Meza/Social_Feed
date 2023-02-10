/*
Within the “DisplayPosts” component, create the feed where all your posts 
will be displayed in your app. All posts should be passed into this 
component using props. Then, utilize the “map” higher order array method 
to map each post to its own Post component.


*/
import EntryPost from '../EntryPost/Post.jsx';


const DisplayPosts = (props) => {
    return (
    <table className='table table-hover'>
          <thead>
            <tr>
              <th scope='col'>Name</th>
              <th scope='col'>Post</th>
            </tr>
          </thead>
      <tbody className='table '>
        {props.parentEntries.map((entries, index) => {
          <EntryPost key={index} index={index} entries={entries} />
          return (
            <tr key = {index}>
              <td>{entries.name}</td>
              <td>{entries.postEntry}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
    );
}
 
export default DisplayPosts;