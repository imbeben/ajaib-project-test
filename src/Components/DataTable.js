import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import moment from 'moment'
class DataTable extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  renderTable (userData) {
    const renderTable = userData && userData.map((data, index) => {
      return (
        <tr key={index}>
          <td>{data.id && data.id.name && data.id.value ? `${data.id.name} ${data.id.value}` : '-'}</td>
          <td>{data.name && data.name.title && data.name.first && data.name.last ? `${data.name.title} ${data.name.first} ${data.name.last}` : '-'}</td>
          <td>{data.email ? data.email : '-'}</td>
          <td>{data.gender ? data.gender : '-'}</td>
          <td>{data.registered ? moment(data.registered.date).format('YYYY-MM-DD HH:m:s') : '-'}</td>
        </tr>
      )
    })

    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Registered Date</th>
          </tr>
        </thead>
        <tbody>
          {renderTable}
        </tbody>
      </Table>
    )
  }

  render () {
    const { userData } = this.props

    return (
      <div>
        {this.renderTable(userData)}
      </div>
    )
  }
}

export default DataTable
