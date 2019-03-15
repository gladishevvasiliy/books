import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap'

const BookListItem = props => (
  <Card
    key={props.book.fields.no}
    style={{ width: 'auto' }}
    className="card-book"
  >
    <Container>
      <Row>
        <Col className="card-book-preview">
          <Image
            variant="top"
            src={`https:${props.book.fields.preview.fields.file.url}`}
            fluid
          />
        </Col>
        <Col>
          <Card.Body>
            <h3>
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
    <Card.Footer className="text-right">
      <Link to={`book/${props.book.sys.id}`}>
        <Button variant="primary">Подробнее</Button>
      </Link>
    </Card.Footer>
  </Card>
)

export default BookListItem
