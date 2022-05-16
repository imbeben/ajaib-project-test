import React, { Component } from 'react'
import { Pagination, Button, ButtonGroup } from 'react-bootstrap'

class Paginations extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { currentPage } = this.props
    return (
      <div>
        <Pagination>
          <Pagination.Prev
            disabled={currentPage === 1}
            name='PrevButton'
            value={currentPage}
            onClick={e =>
              this.props.paginationButton(e, -1)}
          />
          <Pagination.Item active>{currentPage}</Pagination.Item>
          <Pagination.Item
            name='oneBefore'
            value={currentPage}
            onClick={e =>
              this.props.paginationButton(e, -1)}
          >{currentPage + 1}
          </Pagination.Item>
          <Pagination.Next
            name='NextButton'
            value={currentPage}
            onClick={(e) => this.paginationButton(e, 1)}
          />
        </Pagination>
        <ButtonGroup>
          <Button
            disabled={currentPage === 1}
            name='PrevButton'
            value={currentPage}
            onClick={e =>
              this.props.paginationButton(e, -1)}
          >
            &#10092;
          </Button>
          <Button
            className='button-no-click'
            name='oneBefore'
            value={currentPage}
            onClick={e =>
              this.props.paginationButton(e, -1)}
          >
            {currentPage}
          </Button>
          {/* <input
            type='text'
            placeholder='Page'
            disabled
            outline='none'
            value={currentPage}
            onChange={e =>
              this.setState({ currentPage: e.target.value })}
            onKeyPress={e => this.enterPressedPage(e)}
            style={{
              height: '38px',
              width: '75px',
              textAlign: 'center'
            }}
          /> */}
          <Button
            name='oneAfter'
            value={currentPage}
            onClick={e =>
              this.props.paginationButton(e, 1)}
          >
            {currentPage + 1}
          </Button>
          <Button
            name='NextButton'
            value={currentPage}
            onClick={e =>
              this.props.paginationButton(e, 1)}
          >
            &#10093;
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default Paginations
