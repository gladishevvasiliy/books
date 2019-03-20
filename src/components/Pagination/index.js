import React from 'react'
import { Link } from 'react-router-dom'
import { Pagination } from 'react-bootstrap'
import './style.css'
export default class PaginationComponent extends React.Component {
  state = {
    activePageNum: this.props.activePageNum,
  }

  changeActivePageNum = pageNum => {
    this.setState({
      activePageNum: pageNum,
    })
  }

  render() {
    const { pageNums, path } = this.props
    const { activePageNum } = this.state
    return (
      <Pagination>
        {pageNums.map(pageNum =>
          pageNum === activePageNum ? (
            <li key={pageNum} className="page-item active">
              <span className="page-link page-custom-active-link">
                {pageNum}
                <span className="sr-only">(current)</span>
              </span>
            </li>
          ) : (
            <li key={pageNum} className="page-item">
              <Link
                to={`${path}/${pageNum}`}
                onClick={() => this.changeActivePageNum(pageNum)}
                className="page-link page-custom-link"
                role="button"
              >
                {pageNum}
              </Link>
            </li>
          )
        )}
      </Pagination>
    )
  }
}
