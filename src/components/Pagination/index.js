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
            <li class="page-item active">
              <span class="page-link page-custom-active-link">
                {pageNum + 1}
                <span class="sr-only">(current)</span>
              </span>
            </li>
          ) : (
            <li class="page-item">
              <Link
                key={pageNum}
                to={`/${pageNum}`}
                onClick={() => this.changeActivePageNum(pageNum)}
                class="page-link page-custom-link"
                role="button"
              >
                {pageNum + 1}
              </Link>
            </li>
          )
        )}
      </Pagination>
    )
  }
}
