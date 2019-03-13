import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Container, CardDeck } from 'react-bootstrap'
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
    const booksToRows = []
    const size = 4
    while (books.length > 0) booksToRows.push(books.splice(0, size))

    return (
      <>
        <Search getBooks={this.getBooks} />
        <Container className="main-container">
          {booksToRows.map(row => (
            <CardDeck className="book-row">
              {row.map(book => (
                <Card
                  key={book.fields.no}
                  className="book-item"
                  style={{ width: '14rem' }}
                >
                  <Card.Img
                    variant="top"
                    src={`https:${book.fields.preview.fields.file.url}`}
                  />
                  <Card.Body className="card-gradient">
                    <Card.Title>
                      №{book.fields.no} {book.fields.name}
                    </Card.Title>
                    <Card.Text className="book-info">
                      <small>
                        Датировка: {book.fields.year}
                        <br />
                        Происхождение: {book.fields.location}
                        <br />
                        Автор: {book.fields.publisher}
                      </small>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <Link to={`book/${book.sys.id}`}>
                      <Button variant="primary">Подробнее</Button>
                    </Link>
                  </Card.Footer>
                </Card>
              ))}
            </CardDeck>
          ))}
        </Container>
      </>
    )
  }
}
