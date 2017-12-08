import React, {
  Component
} from 'react';
import DataList from './dataList';
import axios from 'axios';
import './home.css';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfData: []
    }
    this.renderCategory = this.renderCategory.bind(this);
  }

  componentWillMount() { //make the get request for getting the category as soon as the page is loaded
    axios.get('/listData')
      .then((res) => {
        this.setState({
          listOfData: res.data
        });
        console.log(this.state.listOfData);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  renderCategory = () => {
    const list = this.state.listOfData.map(
      listOfData =>
      <div key={listOfData.id}>
        <DataList listOfData={listOfData}></DataList>
      </div>
    )
    return (list);
  }

  render() {
    return (
      <div className="container">
        {this.renderCategory()}
        <span className="align-center">
      <a href="#"  class="btn btn-success">Add new ideas</a>
      </span>
      </div>
    )
  }


}
