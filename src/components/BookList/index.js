import React from 'react'
import BookListItem from '../BookListItem'

const BookList = props => (
  <>
    {props.bookList.map(book => (
      <BookListItem book={book} />
    ))}
  </>
)

export default BookList
