import React from 'react'
import { isNil } from 'lodash'
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap'
import './style.css'

const BookListItem = props => (
  <Card
    key={props.book.fields.no}
    style={{ width: 'auto' }}
    className="card-book"
  >
    <Container>
      <Row>
        <Col className="card-book-preview" xs={12} sm={12} md={6}>
          <Image
            variant="top"
            src={`https:${props.book.fields.preview.fields.file.url}`}
            fluid
          />
        </Col>
        <Col xs={12} sm={12} md={6} className="card-book-info">
          <Card.Body>
            <h3
              onClick={() => props.history.push(`/book/${props.book.sys.id}`)}
            >
              №{props.book.fields.no} {props.book.fields.name}
            </h3>
            <Card.Text className="book-info">
              Датировка: {props.book.fields.year}
              <br />
              Место создания: {props.book.fields.location}
              <br />
              Автор: {props.book.fields.publisher}
              <br />
              Размер: {props.book.fields.size}
              <br />
              Полнота и сохранность: {props.book.fields.fullness}
              <br />
              Автор: {props.book.fields.publisher}
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Container>
    <Card.Footer>
      <Row>
        <Col md={9} sm={8} xs={7} className="book-tags">
          {isNil(props.book.fields.tags)
            ? null
            : props.book.fields.tags.map(tag => `#${tag}  `)}
        </Col>
        <Col md={3} sm={4} xs={5} className="text-right">
          <Button
            className="button-custom"
            variant="primary"
            onClick={() => props.history.push(`/book/${props.book.sys.id}`)}
          >
            Подробнее
          </Button>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
)

export default BookListItem
