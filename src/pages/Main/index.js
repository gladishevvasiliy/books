import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Container, CardDeck } from 'react-bootstrap'
import Header from '../../components/Header'
import * as contentful from 'contentful'
import './style.css'
export default class Main extends Component {
  state = {
    books: [],
  }

  client = contentful.createClient({
    space: 'ztvkbeux51wi',
    accessToken:
      '158416fa541a39154640e01fe05fc96222f8211e04f8a79efaea6b42d37d3c3c',
  })

  componentDidMount() {
    this.fetchBooks().then(this.setBooks)
  }

  fetchBooks = () => this.client.getEntries()

  setBooks = response => {
    this.setState({
      books: response.items,
    })
  }

  render() {
    const { books } = this.state
    const booksToRows = []
    const size = 4

    while (books.length > 0) booksToRows.push(books.splice(0, size))
    return (
      <>
        <Header />
        <Container>
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
                    <Link to={`${book.sys.id}`}>
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
