



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
 
export default DisplayPostprops;