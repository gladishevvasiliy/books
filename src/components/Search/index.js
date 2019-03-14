import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { isNil } from 'lodash'
import { Form, Button, Card, Col, Container, Row } from 'react-bootstrap'
import './style.css'

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef()
  }

  formHandler = e => {
    const { getBooks } = this.props
    e.preventDefault()
    const {
      no,
      name,
      year,
      location,
      size,
      fullness,
      binding,
    } = e.target.elements

    const fields = [no, name, year, location, size, fullness, binding]
    let options = { content_type: 'book' }

    fields.map(field => {
      if (field.value.length === 0) return
      if (field.id === 'no' && !isNil(field.value)) {
        options = {
          ...options,
          ['fields.' + field.id]: field.value,
        }
        return
      }
      options = { ...options, ['fields.' + field.id + '[match]']: field.value }
    })
    getBooks(options)
  }
  resetSearch = () => {
    const { getBooks } = this.props
    ReactDOM.findDOMNode(this.textInput).reset()
    getBooks()
  }
  render() {
    return (
      <Container>
        <Card className="search-container">
          <Card.Header>Поиск</Card.Header>
          <Form
            className="search-form"
            onSubmit={this.formHandler}
            ref={form => (this.textInput = form)}
          >
            <Form.Row>
              <Form.Group as={Col} md="1" controlId="no">
                <Form.Label>№</Form.Label>
                <Form.Control size="sm" type="number" />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="name">
                <Form.Label>Название книги</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>
              <Form.Group as={Col} md="1" controlId="year">
                <Form.Label>Датировка</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="location">
                <Form.Label>Местность издания</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="size">
                <Form.Label>Размер</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="fullness">
                <Form.Label>Полнота и сохранность</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>
              <Form.Group as={Col} md="2" controlId="binding">
                <Form.Label>Переплет</Form.Label>
                <Form.Control size="sm" type="text" />
              </Form.Group>
            </Form.Row>
            <Row>
              <Col md={{ span: 1, offset: 9 }}>
                <Button variant="secondary" onClick={this.resetSearch}>
                  Сбросить поиск
                </Button>
              </Col>
              <Col md={2} className="text-right">
                <Button variant="primary" type="submit">
                  Поиск
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    )
  }
}
