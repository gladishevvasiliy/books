import React, { Component } from 'react'
import Header from '../../components/Header'
import { Container, Col, Row } from 'react-bootstrap'
import * as contentful from 'contentful'
import { isNil } from 'lodash'

export default class Book extends Component {
  state = {
    book: {},
  }

  client = contentful.createClient({
    space: 'ztvkbeux51wi',
    accessToken:
      '158416fa541a39154640e01fe05fc96222f8211e04f8a79efaea6b42d37d3c3c',
  })

  componentDidMount() {
    this.fetchBook().then(this.setBook)
  }

  fetchBook = () => this.client.getEntry(this.props.match.params.id)

  setBook = response => {
    this.setState({
      book: response.fields,
    })
  }

  render() {
    const { book } = this.state
    if (isNil(book.preview)) return null
    return (
      <>
        <Header />
        <Container>
          <Row>
            <Col>
              <h1>{book.name}</h1>
              <h5>Номер по описи: {book.no}</h5>
              <h5>Датировка: {book.year}</h5>
              <h5>Происхождение: {book.location}</h5>
              <h5>Автор: {book.publisher}</h5>
            </Col>
            <Col>
              <img src={`https:${book.preview.fields.file.url}`} />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
