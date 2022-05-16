import React, { Component } from 'react'

// config
import config from '../config'

class FilterSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  // for reset filter gender & search keyword
  resetFilter=()=>{
    this.setState({
      keyword: ''
    },()=> {
      this.props.handleChange('gender', '')
    })
  }

  render () {
    // get data from state
    const { keyword } = this.state
    // get data from props
    const { gender } = this.props
    // get data from config
    const listGender = config.gender
    // mapping gender from config
    const renderGender = listGender.map((data, index) => {
      return (
        // return option for select
        <option key={index} value={data.value}>
          {data.gender}
        </option>
      )
    })
    return (
      <div className='filter-search'>
        <div className='row'>
          <div className='col-3'>
            <div className='text-align-left'>
              Search
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder='Search...'
                onChange={(e) => this.setState({keyword: e.target.value})} value={keyword.toUpperCase()} />
                <button className='button-search' type="button" onClick={()=> {this.props.filterSearch(keyword)}}>
                  <i className='fa fa-search padding-left-right-xs' />
                </button>
             </div>
          </div>
          <div className='col-3'>
          <div className='text-align-left'>
              Gender
            </div>
          <div className="input-group mb-3">
              <select type="text" className="form-select" value={gender} onChange={(e) => {this.props.handleChange('gender', e.target.value); ; this.setState({keyword: ''})}} >
              {renderGender}
              </select>
              <button className='button-reset' type="button" onClick={() => this.resetFilter()}>Reset Filter</button>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default FilterSearch