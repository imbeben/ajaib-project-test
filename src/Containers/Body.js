import React, { Component } from 'react'
import UserActions from '../Redux/reducer/UserRedux'
import { connect } from 'react-redux'
import moment from 'moment'

// Components
import DataTables from '../Components/DataTables'
import FilterSearch from '../Components/FilterSearch'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gender: '',
      resultData: []
    }
  }

  componentDidMount () {
    const { gender } = this.state
    const data = {
        gender
    }
    this.props.userRequest(data)
  }

  componentWillReceiveProps(newProps){
    const { userData } = newProps
    if (userData && userData.data) {
      this.setState({
        resultData: userData.data,
        maxPage: Math.ceil(userData.data.length / 5)
      })
    }
  }

  // handle input change value
  handleChange =(key, value)=> {
    this.setState({
      [key]: value
    }, ()=> {
        if(key === 'gender'){
            const gender = this.state.gender
            const data = {
                gender
            }
            this.props.userRequest(data)
        }
    })
  }

  // filter gender and search by keyword
  filterSearch=(keyword)=>{
    const { userData } = this.props
    const lowerKeyword = keyword.toLowerCase()
    const data = userData && userData.data
      let listToDisplay = data.filter((element) => {
        const username = element.id && element.id.name && element.id.value ? `${element.id.name} ${element.id.value}` : '-'
        const name = element.name && element.name.title && element.name.first && element.name.last ? `${element.name.title} ${element.name.first} ${element.name.last}` : '-'
        const email = element.email ? element.email : '-'
        const gender = element.gender ? element.gender : '-'
        const date = element.registered ? moment(element.registered.date).format('YYYY-MM-DD HH:m:s') : '-'
        return username.toLowerCase().includes(lowerKeyword) || name.toLowerCase().includes(lowerKeyword) || email.toLowerCase().includes(lowerKeyword) || gender.toLowerCase().includes(lowerKeyword) || date.toLowerCase().includes(lowerKeyword);
      });
      this.setState({
        resultData: listToDisplay
      })
  }

  render () {
    const { gender, resultData } = this.state

    return (
      <div className='app-container'>
        <label className='body-title'>
          Example With Search and Filter
        </label>

        {/* for component filter and search */}
        <FilterSearch
        gender={gender}
        handleChange={this.handleChange}
        filterSearch={this.filterSearch}/>

        {/* for component data table */}
        <DataTables
          userData={resultData}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userData: state.user
})

const dispatchToProps = (dispatch) => ({
  userRequest: (data) => dispatch(UserActions.userRequest(data))
})

export default connect(mapStateToProps, dispatchToProps)(Body)
