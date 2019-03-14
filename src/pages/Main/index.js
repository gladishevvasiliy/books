import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap'
import { isNil } from 'lodash'
import * as contentful from 'contentful'
import Search from '../../components/Search'
import './style.css'

export default class Main extends React.Component {
  state = {
    books: [],
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
    this.setState({
      books: response.items,
    })
  }
  render() {
    const { books } = this.state
    if (isNil(books)) return <h1>Загрузка...</h1>
    return (
      <>
        <Search getBooks={this.getBooks} />
        <Container className="main-container">
          {books.map(book => (
            <Card
              key={book.fields.no}
              style={{ width: 'auto' }}
              className="card-book"
            >
              <Container>
                <Row>
                  <Col className="card-book-preview">
                    <Image
                      variant="top"
                      src={`https:${book.fields.preview.fields.file.url}`}
                      fluid
                    />
                  </Col>
                  <Col>
                    <Card.Body>
                      <h3>
                        №{book.fields.no} {book.fields.name}
                      </h3>
                      <Card.Text className="book-info">
                        <p>
                          Датировка: {book.fields.year}
                          <br />
                          Место создания: {book.fields.location}
                          <br />
                          Автор: {book.fields.publisher}
                          <br />
                          Размер: {book.fields.size}
                          <br />
                          Полнота и сохранность: {book.fields.fullness}
                          <br />
                          Автор: {book.fields.publisher}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Container>
              <Card.Footer className="text-right">
                <Link to={`book/${book.sys.id}`}>
                  <Button variant="primary">Подробнее</Button>
                </Link>
              </Card.Footer>
            </Card>
          ))}
        </Container>
      </>
    )
  }
}
