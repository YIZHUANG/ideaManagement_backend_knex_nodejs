import React, {
  Component
} from 'react';
export default class DataList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <table className="table table-striped table-hover table-responsive">
           <thead>
         <tr>
            <th>#</th>
            <th>Idea title</th>
            <th>Idea owner</th>
            <th>Description</th>
            <th>Budget</th>
            <th>PeopleNeeded</th>
            <th>Category</th>
            <th>IsReadyForComments</th>
            <th>Comments</th>
            <th>isActive</th>
            <th>Creation date</th>
            <th>Last modefiled</th>
          <th></th>
          <th></th>
          <th></th>
         </tr>
       </thead>
        <tbody>
         <tr>
           <th scope="row">{this.props.listOfData.id}</th>
            <td>{this.props.listOfData.title}</td>
            <td>{this.props.listOfData.userName}</td>
            <td>{this.props.listOfData.description}</td>
            <td>{this.props.listOfData.budget}</td>
            <td>{this.props.listOfData.peopleNeeded}</td>
            <td>{this.props.listOfData.name}</td>
            <td>{this.props.listOfData.isReadyForComments?"True":"False"}</td>
            <td><a href="#" className="btn btn-danger">Click here to see comments</a></td>
            <td>{this.props.listOfData.isActive ? "True" : "False"}</td>
            <td>{this.props.listOfData.creationDate}</td>
            <td>{this.props.listOfData.lastModified}</td>
            <td><a href="#" className="btn btn-danger">Click here to comment</a></td>
            <td><a href="#" className="btn btn-danger">Delete</a></td>
            <td><a href="#" className="btn btn-pimary">Edit</a></td>
         </tr>
       </tbody>
      </table>
      </div>
    )
  }
}
