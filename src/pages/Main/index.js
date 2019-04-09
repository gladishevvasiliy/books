import React from 'react'
import { Route } from 'react-router-dom'
import { Container, Alert } from 'react-bootstrap'
import PaginationComponent from '../../components/Pagination'
import { isNil } from 'lodash'
import * as contentful from 'contentful'
import Search from '../../components/Search'
import BookList from '../../components/BookList'

import './style.css'

export default class Main extends React.Component {
  state = {
    pages: [],
    activePageNum: 1,
    pageNums: [],
  }

  client = contentful.createClient({
    space: 'ztvkbeux51wi',
    accessToken:
      '158416fa541a39154640e01fe05fc96222f8211e04f8a79efaea6b42d37d3c3c',
  })

  componentDidMount() {
    this.getBooks()
  }

  getBooks = options => {
    return this.fetchBooks(options).then(this.setBooks)
  }

  fetchBooks = options =>
    this.client.getEntries(!isNil(options) ? options : { content_type: 'book' })

  setBooks = response => {
    let i = 0
    const pages = []
    const pageNums = []
    while (response.items.length > 0) {
      pages.push(response.items.splice(0, 10))
      pageNums.push(i + 1)
      i++
    }
    this.setState({
      pages: pages,
      pageNums: pageNums,
    })
  }

  goToPage = pageNum => {
    this.setState({
      activePageNum: pageNum,
    })
  }

  render() {
    const { pages, pageNums } = this.state
    const { match } = this.props
    if (pages.length === 0)
      return (
        <>
          <Search getBooks={this.getBooks} />
          <Container className="main-container">
            <Alert variant="danger">Книг по данному запросу не найдено</Alert>
          </Container>
        </>
      )

    return (
      <>
        <Search getBooks={this.getBooks} />
        <Container className="main-container">
          <Route
            path={`${match.path}/:page`}
            render={props => (
              <BookList
                bookList={
                  isNil(pages[props.match.params.page - 1])
                    ? pages[0]
                    : pages[props.match.params.page - 1]
                }
                {...props}
              />
            )}
          />
          {pages.length === 1 ? null : (
            <PaginationComponent
              pageNums={pageNums}
              path={match.path}
              activePageNum={1}
            />
          )}
        </Container>
      </>
    )
  }
}
