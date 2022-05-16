import React, { Component } from 'react'
import { Row, Col, Button, InputGroup, Form } from 'react-bootstrap'
import config from '../config'

class FilterSearch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      keyword: ''
    }
  }

  handleChangeCarrierChooseMethod (carrierChoiceId, e, selectedCarrierChoice) {
    const deliveryMethod = selectedCarrierChoice.find(function (element) {
      return element.carrier.carrier_id === e
    })
    this.setState({
      selectedCarrierChoiceMethod: deliveryMethod,
      showDropdownCarrierChoice: false,
      carrierChoiceId
    }, () => {
      this.handleChooseCarrier(this.state.selectedCarrierChoiceMethod)
      this.props.handleisDisableCheckOut(false)
    })
  }

  render () {
    const { keyword } = this.state
    const { gender } = this.props
    console.log('🚀 ~ file: FilterSearch.js ~ line 30 ~ FilterSearch ~ render ~ gender', gender)
    const listGender = config.gender
    const renderGender = listGender.map((data, index) => {
      return (
        <option key={index} value={data.value}>
          {data.gender}
        </option>
      )
    })
    return (
      <div>
        <Row>
          <Col>
            <span>
              Search
            </span>
            <InputGroup>
              <Form.Control
                placeholder='Search...'
                aria-label='Search'
                aria-describedby='basic-addon2'
                onChange={(e) => this.handleChange('keyword', e.target.value)} value={keyword}
              />
              <Button variant='outline-secondary' id='button-addon2'>
                Search
              </Button>
            </InputGroup>
          </Col>
          <Col>
            <span>
              Gender
            </span>
            <InputGroup>
              <Form.Select aria-label='Default select example' onChange={(e) => this.props.handleChange('gender', e.target.value)}>
                {renderGender}
              </Form.Select>
              <Button className='margin-left-s'>
                Reset Filter
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

export default FilterSearch
