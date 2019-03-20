import React from 'react'
import BookListItem from '../BookListItem'

const BookList = props => (
  <>
    {props.bookList.map(book => (
      <BookListItem book={book} history={props.history} key={book.sys.id} />
    ))}
  </>
)

export default BookList
