import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { isNil } from 'lodash'
import {
  Form,
  Button,
  Card,
  Col,
  Container,
  Row,
  Collapse,
} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './style.css'

library.add(faSearch)

export default class Search extends Component {
  constructor(props) {
    super(props)

    this.textInput = React.createRef()
    this.state = {
      open: false,
    }
  }

  formHandler = (e) => {
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

    fields.map((field) => {
      if (field.value.length === 0) return null
      if (field.id === 'no' && !isNil(field.value)) {
        options = {
          ...options,
          ['fields.' + field.id]: field.value,
        }
        return null
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
    const { open } = this.state
    return (
      <Container>
        <Card className="search-container">
          <Card.Header>
            <Row>
              <Col>Поиск</Col>
              <Col className="text-right">
                <Button
                  onClick={() => this.setState({ open: !open })}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  className="button-custom"
                  size="sm"
                >
                  <FontAwesomeIcon icon={faSearch} color="#fff" />
                </Button>
              </Col>
            </Row>
          </Card.Header>
          <Collapse in={this.state.open}>
            <div id="example-collapse-text">
              <Form
                className="search-form"
                onSubmit={this.formHandler}
                ref={(form) => (this.textInput = form)}
              >
                <Form.Row>
                  <Form.Group as={Col} md="1" lg={1} controlId="no">
                    <Form.Label>№</Form.Label>
                    <Form.Control size="sm" type="number" />
                  </Form.Group>
                  <Form.Group as={Col} md="2" lg={2} controlId="name">
                    <Form.Label>Название</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="2" lg={2} controlId="year">
                    <Form.Label>Датировка</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="3" lg={3} controlId="location">
                    <Form.Label>Местность издания</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="2" lg={2} controlId="size">
                    <Form.Label>Размер</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="4" lg={3} controlId="fullness">
                    <Form.Label>Полнота и сохранность</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                  <Form.Group as={Col} md="2" lg={2} controlId="binding">
                    <Form.Label>Переплет</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                </Form.Row>
                <Row>
                  <Col xs={2} md={2} lg={1} className="text-left">
                    <Button
                      className="button-custom"
                      variant="primary"
                      type="submit"
                    >
                      Поиск
                    </Button>
                  </Col>
                  <Col xs={2} md={2} lg={1}>
                    <Button variant="secondary" onClick={this.resetSearch}>
                      Сбросить поиск
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Collapse>
        </Card>
      </Container>
    )
  }
}
