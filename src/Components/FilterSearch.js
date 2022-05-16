import React, { Component } from 'react'
import config from '../config'

class FilterSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  resetFilter=()=>{
    this.setState({
      keyword: ''
    },()=> {
      this.props.handleChange('gender', '')
    })
  }

  render () {
    const { keyword } = this.state
    const { gender } = this.props
    const listGender = config.gender
    const renderGender = listGender.map((data, index) => {
      return (
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
                <button className='button-search' style={{marginLeft: '5px'}} type="button" onClick={()=> {this.props.filterSearch(keyword)}}>
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
              <button className='button-reset' style={{marginLeft: '5px'}} type="button" onClick={() => this.resetFilter()}>Reset Filter</button>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

export default FilterSearch