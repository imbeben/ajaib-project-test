import React, { Component } from 'react'
import UserActions from '../Redux/reducer/UserRedux'
import { connect } from 'react-redux'

// Components
import DataTable from '../Components/DataTable'
import FilterSearch from '../Components/FilterSearch'
import Paginations from '../Components/Paginations'

class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      gender: '',
      offset: 1,
      limit: 5,
      currentPage: 1
    }
  }

  componentDidMount () {
    const { offset, limit, gender } = this.state
    const data = {
        offset,
        limit,
        gender
    }
    this.props.userRequest(data)
  }

  handleChange =(key, value)=> {
    this.setState({
      [key]: value
    }, ()=> {
        if(key === 'gender'){
            const offset = this.state.offset
            const limit = this.state.limit
            const gender = this.state.gender
            const data = {
                offset,
                limit,
                gender
            }
            this.props.userRequest(data)
        }
    })
  }

  paginationButton =(event, flag)=> {
    const { limit, gender } = this.state
    console.log('🚀 ~ file: Body.js ~ line 29 ~ Body ~ paginationButton ~ limit', limit)
    console.log('🚀 ~ file: Body.js ~ line 28 ~ Body ~ paginationButton ~ flag', flag)
    const currPage = Number(event.target.value)
    console.log('🚀 ~ file: Body.js ~ line 30 ~ Body ~ paginationButton ~ currPage', event.target.value)
    if (currPage + flag > 0 && currPage) {
      this.setState(
        {
          currentPage: currPage + flag
        },
        () => {
          const cp = currPage + flag
          const data = {
            cp, limit, gender
          }

          console.log('🚀 ~ file: Body.js ~ line 39 ~ Body ~ paginationButton ~ data', data)
          this.props.userRequest(data)
        }
      )
    }
  }


  render () {
    const { userData } = this.props
    const { currentPage, gender } = this.state
    return (
      <div>
        <FilterSearch
        gender={gender}
        handleChange={this.handleChange} />
        <DataTable
          userData={userData && userData.data}
        />
        <Paginations
          userData={userData && userData.data}
          currentPage={currentPage}
          paginationButton={this.paginationButton}
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
// export default Body
