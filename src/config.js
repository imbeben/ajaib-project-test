const config = {
  apiURL: 'https://randomuser.me/',
  gender: [{
    gender: 'All',
    value: ''
  },
  {
    gender: 'Male',
    value: 'male'
  },
  {
    gender: 'Female',
    value: 'female'
  }],
  columns: [
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
}

export default config
