import Body from './Containers/Body'
import { MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";

import React, { Component } from 'react';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      location: 'Example Page'
    }
  }

  render() {
    const { location } = this.state
    return (
    <div className='App padding-left-right-s padding-top-s'>
      <MDBBreadcrumb>
         <MDBBreadcrumbItem>Home</MDBBreadcrumbItem>
         <MDBBreadcrumbItem active>{location}</MDBBreadcrumbItem>
       </MDBBreadcrumb>
      <Body />
    </div>
    );
  }
}

export default App;
