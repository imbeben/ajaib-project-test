import React, { Component } from 'react'

// library
import moment from 'moment'
import DataTable from 'react-data-table-component';

class DataTables extends Component {
  // for render table
  renderTable (userData) {
    let newData =[]
    for (let index = 0; index < userData.length; index++) {
      const element = userData[index];
      const data = {
        username: element.id && element.id.name && element.id.value ? `${element.id.name} ${element.id.value}` : '-',
        name: element.name && element.name.title && element.name.first && element.name.last ? `${element.name.title} ${element.name.first} ${element.name.last}` : '-',
        email: element.email ? element.email : '-',
        gender: element.gender ? element.gender : '-',
        date: element.registered ? moment(element.registered.date).format('YYYY-MM-DD HH:m:s') : '-'
      }
      newData.push(data)
    }

    const columns = [
      {
        name: 'Username',
        selector: row => row.username,
        sortable: true,
      },
      {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
      },
      {
        name: 'Email',
        selector: row => row.email,
        sortable: true,
      },
      {
        name: 'Gender',
        selector: row => row.gender,
        sortable: true,
      },
      {
        name: 'Registered Date',
        selector: row => row.date,
        sortable: true,
      }
    ]
      
      return(
      <div> 
        {/* from library data table */}
        <DataTable
            columns={columns}
            data={newData}
            responsive
            highlightOnHover
            pagination={true}
            paginationPerPage={5}
            paginationRowsPerPageOptions={[5, 10, 15]}
            progressPending={userData ? false : true}
            subHeader
        />
      </div>)
  }

  render () {
    // get data from props
    const { userData } = this.props

    return (
      <div>
        {this.renderTable(userData)}
      </div>
    )
  }
}

export default DataTables
