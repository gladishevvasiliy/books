import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as contentful from 'contentful'
import { isNil } from 'lodash'
import Examples from '../../components/Examples'
import './style.css'

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

  setBook = (response) => {
    this.setState({
      book: response.fields,
    })
  }

  render() {
    const { book } = this.state
    console.log(book)
    if (isNil(book.preview)) return null
    return (
      <>
        <Container className="main-container">
          <Row className="back-row">
            <Link className="back-link custom-link" to={`/`}>
              <FontAwesomeIcon icon="long-arrow-alt-left" />
              {`   `}
              Назад
            </Link>
          </Row>
          <Row>
            <Col md={4}>
              <h1 className="book-title">{book.name}</h1>
              <Table responsive>
                <tbody>
                  <tr>
                    <td>Инвентарный номер</td>
                    <td>{book.no}</td>
                  </tr>
                  <tr>
                    <td>Место создания</td>
                    <td>{book.location}</td>
                  </tr>
                  <tr>
                    <td>Датировка</td>
                    <td>{book.year}</td>
                  </tr>
                  <tr>
                    <td>Размер</td>
                    <td>{book.size}</td>
                  </tr>
                  <tr>
                    <td>Полнота и сохранность</td>
                    <td>{book.fullness}</td>
                  </tr>
                  <tr>
                    <td>Автор</td>
                    <td>{book.publisher}</td>
                  </tr>
                  <tr>
                    <td>Файлы *.pdf</td>
                    <td>
                      {!isNil(book.bookFile) ? (
                        <a href={book.bookFile} className="custom-link">
                          Загрузить
                        </a>
                      ) : null}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={8}>
              {isNil(book.examples) ? null : (
                <Examples examples={book.examples} />
              )}
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}
