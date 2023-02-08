/*
Within the “DisplayPosts” component, create the feed where all your posts 
will be displayed in your app. All posts should be passed into this 
component using props. Then, utilize the “map” higher order array method 
to map each post to its own Post component.


*/



const DisplayPosts = (props) => {
    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Post</th>
          </tr>
        </thead>
        <tbody>
          {props.parentEntries.map((entry) => {
            return (
              <tr>
                <td>{entry.nameEntry}</td>
                <td>{entry.message}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    );
}
 
export default DisplayPosts;